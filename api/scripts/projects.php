<?php
//--------------------------------------//
//                                      //
//             projects API             //
//                                      //
//--------------------------------------//

  if(in_array("projects", $request->path)){
    header('Content-Type: application/json');
    $projectsFile = file_get_contents('projects.json');
    $projectList = json_decode($projectsFile);

    // projects GET
    if($request->method == 'GET'){
      if(count($request->path)==1){
        echo '{"error":"Cannot GET all projects at once"}';
      } else {
        $result = [];
        foreach($projectList as $k=>$project){
          if(strpos($request->path[1], ".") > -1){
            if($project->owner == $request->path[1]){
              array_push($result, $project);
            } elseif(property_exists($project, 'attendees') && in_array($request->path[1], $project->attendees)) {
              array_push($result, $project);
            }else {
              foreach($project->tasks as $in=>$task){
                if($task->responsible == $request->path[1]){
                  array_push($result, $project);
                  break;
                }
              }
            }
          } else {
            if($project->id == $request->path[1]){
              array_push($result, $project);
              break;
            }
          }
        }
        echo json_encode($result);
      }
    }
    // projects POST ==> input new $project
    if($request->method == 'POST') {
      if(count($request->path)==1){
        $request->data->id = getMaxId($projectList);
        array_push($projectList, $request->data);
        file_put_contents('projects.json', json_encode($projectList, JSON_PRETTY_PRINT));
        echo json_encode($request->data);
      } elseif (count($request->path)==3 && $request->path[2] == "task"){
        foreach($projectList as $k=>$project){
          if($project->id == $request->path[1]){
            $projectList[$k] = $request->data;
            file_put_contents('projects.json', json_encode($projectList, JSON_PRETTY_PRINT));
            echo json_encode($request->data);
          }
        }
      }
    }
    // projects PUT ==> update $porjects
    if($request->method == 'PUT'){
      if(count($request->path)==1){
        foreach($projectList as $k=>$project){
          if($project->id == $request->data->id){
            $projectList[$k] = $request->data;
          }
        }
        file_put_contents('projects.json', json_encode($projectList, JSON_PRETTY_PRINT));
        echo json_encode($request->data);
      }
    }

    $projectsFile = null;
    $projectList = null;
  }

?>