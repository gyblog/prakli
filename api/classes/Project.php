<?php

Class Project {
  private $project;
  private $task;
  private $modified;
  private $d;
  function __construct($db){
    $this->d = $db;
    $this->project = new \DB\SQL\Mapper($db, 'projects');
    $this->task = new \DB\SQL\Mapper($db, 'tasks');
    $this->modified = new \DB\SQL\Mapper($db, 'modified');
  }

  function lister($projectlist){
    $result = [];
    foreach($projectlist as $project){
      $pres = [];
      unset($project['responsible']);
      foreach($project as $k=>$v){
        $pres[$k] = $v;
        if($k == 'attendees'){
          $pres[$k] = explode(',',$v);
        }
        if($k == 'duedate' || $k == 'createdon'){
          $pres[$k] = strtotime($v)*1000;
        }
        if($k == 'id'){
          $tasklist = $this->task->find(array('project_id=?',$v));
          $tresult = [];
          foreach($tasklist as $t=>$q){
            $tk = [];
            $tk['title'] = $project['title'];
            foreach($q as $ka=>$va){
              $tk[$ka] = $va;
              if($ka == 'affecting'){
                $tk[$ka] = explode(',', $va);
              }
              if($ka == 'duedate' || $ka == 'createdon' || $ka == 'closedon'){
                $tk[$ka] = strtotime($va)*1000;
              }
              if($ka == 'id'){
                $modlist = $this->modified->find(array('task_id=?',$va));
                $mresult = [];
                foreach($modlist as $m=>$x){
                  $mk = [];
                  foreach($x as $km=>$vm){
                    $mk[$km] = $vm;
                    if($km == 'duedate' || $km == 'on'){
                      $mk[$km] = strtotime($vm)*1000;
                    }
                  }
                  array_push($mresult, $mk);
                }
              }
              $tk['modified'] = $mresult;
            }
            array_push($tresult, $tk);
          }
        }
        $pres['tasks'] = $tresult;
      }
      array_push($result, $pres);
    }
    echo json_encode($result);
 }

 function getDepartments(){
   $c = $this->d->exec('select COUNT(projects.id) as PC, users.organization from projects left join users on projects.owner = users.username group by projects.owner order by PC DESC');
   $result = [];
   foreach($c as $k=>$v){
     $res = [];
     foreach($v as $i=>$j){
       $res[$i] = $j;
     }
     array_push($result, $res);
   }
   echo json_encode($result);
 }
  function getUserProjects(){
   $c = $this->d->exec('select COUNT(projects.id) as PC, users.name from projects left join users on projects.owner = users.username group by projects.owner order by PC DESC limit 10;');
   $result = [];
   foreach($c as $k=>$v){
     $res = [];
     foreach($v as $i=>$j){
       $res[$i] = $j;
     }
     array_push($result, $res);
   }
   echo json_encode($result);
 }
   function getUserTasks(){
   $c = $this->d->exec('select COUNT(tasks.id) as PC, users.name from tasks left join users on tasks.responsible = users.username group by tasks.responsible order by PC DESC limit 10;');
   $result = [];
   foreach($c as $k=>$v){
     $res = [];
     foreach($v as $i=>$j){
       $res[$i] = $j;
     }
     array_push($result, $res);
   }
   echo json_encode($result);
 }
 function getTypes(){
  $c = $this->d->exec('select COUNT(id) as PC, if(type!=\'\',type,\'NINCS\') as type from projects group by type');
   $result = [];
   foreach($c as $k=>$v){
     $res = [];
     foreach($v as $i=>$j){
       $res[$i] = $j;
     }
     array_push($result, $res);
   }
   echo json_encode($result);
 }
 function getAllUsers(){
   $c = $this->d->exec('select COUNT(username) as PC, if(organization != "", organization, "NINCS") as org from users group by organization;');
   $result = [];
   foreach($c as $k=>$v){
     $res = [];
     foreach($v as $i=>$j){
       $res[$i] = $j;
     }
     array_push($result, $res);
   }
   echo json_encode($result);
 }
  function getTaskcount($uname){
    $count = $this->d->exec('select count(id) as C from tasks where responsible="'.$uname.'"');
    echo $count[0]['C'];
  }
  function getAll($uname){
    //$projectlist = $this->project->find(array('owner=?',$uname));
    $projectlist = $this->d->exec('select * from mytasks where owner="'.$uname.'" or attendees like "%'.$uname.'%" or responsible = "'.$uname.'" group by id');
    $this->lister($projectlist);
  }
  function getEmpl($uname){
    $projectlist = $this->d->exec('select * from myempl where supervisor="'.$uname.'"');
    $this->lister($projectlist);
  }
  function get($id){
    $projectlist = $this->project->find(array('id=?',$id));
    $this->lister($projectlist);
  }
  function post($data){
    $this->project->copyFrom($data);
    if(property_exists($data, 'attendees')) {
      $this->project->attendees = implode(',',$data->attendees);
    }
    $this->project->duedate = date('Y-m-d', $data->duedate/1000);
    $this->project->save();
    $id = $this->project->id;
    $projectlist = $this->project->find(array('id=?',$id));
    $this->lister($projectlist);
  }
  function put($data, $id){
    $this->project->load(array('id=?',$id));
    $this->project->copyFrom($data);
    $this->project->duedate = date('Y-m-d', $data->duedate/1000);
    $this->project->createdon = date('Y-m-d H:i:s', $data->createdon/1000);
    if(property_exists($data, 'attendees')) {
      $this->project->attendees = implode(',',$data->attendees);
    }
    $this->project->save();
    if(property_exists($data, 'tasks')){
      foreach($data->tasks as $task){
        if(count($this->task->load(array('id=?',$task->id))) > 0){
          $this->task->copyFrom($task);
          $this->task->project_id = $this->project->id;
          if(property_exists($task, 'affecting')){
            $this->task->affecting = implode(',',$task->affecting);
          }
          $this->task->createdon = date('Y-m-d H:i:s', $task->createdon/1000);
          $this->task->duedate = date('Y-m-d', $task->duedate/1000);
          $this->task->closedon = date('Y-m-d H:i:s', $task->closedon/1000);
          $this->task->save();
        } else {
          $this->task->copyFrom($task);
          $this->task->project_id = $this->project->id;
          $this->task->affecting = implode(',',$task->affecting);
          $this->task->save();
        }
        if(property_exists($task, 'modified')){
          foreach($task->modified as $mod){
            if(count($this->modified->find(array('id=?',$mod->id)))==0){
              $this->modified->task_id = $this->task->id;
              $this->modified->copyFrom($mod);
              $this->modified->duedate = date('Y-m-d', $mod->duedate/1000);
              $this->modified->on = date('Y-m-d H:i:s', $mod->on/1000);
              $this->modified->save();
            }
          }
        }
      }
    }
    $projectlist = $this->project->find(array('id=?',$id));
    $this->lister($projectlist);
  }
}

?>