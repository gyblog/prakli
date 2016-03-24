<?php
class User {
  private $user;
  private $d;
  function __construct($db){
    $this->d = $db;
    $this->user = new \DB\SQL\Mapper($db, 'users');
  }
  function getAll(){
    //$userlist = $this->user->find();
    $userlist = $this->d->exec('select username, name, organization, supervisor, role, emailfreqvency, COUNT(tasks.id) as tasks, COUNT(projects.id) as projects from users left join tasks on users.username = tasks.responsible left join projects on users.username = projects.owner group by users.username');
    return translate($userlist);
    @unlink($userlist);
  }
  function get($uname){
    $userlist = $this->user->find(array('username=?',$uname));
    return translate($userlist);
    @unlink($userlist);
  }
  function put($data, $uname){
    $userlist = $this->user->load(array('username=?',$uname));
    $userlist->copyFrom($data);
    $userlist->save();
    header('Content-Type: applictaion/json');
    echo '[{"success":"Data successfully updated"}]';
    @unlink($userlist);
  }
  function post($data) {
    $this->user->copyFrom($data);
    $this->user->save();
    $u = $this->user->find(array('username=?', $data->username));
    echo translate($u);
    @unlink($u);
  }
  function delete($uname){
    $this->user->load(array('username=?',$uname));
    $this->user->erase();
  }
}
?>