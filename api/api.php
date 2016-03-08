<?php
  $request = json_decode('{}');

  if(($stream = fopen('php://input', "r")) !== FALSE) {
    $postdata = stream_get_contents($stream);
    $request->data = json_decode($postdata);
  }

  $request->method = $_SERVER['REQUEST_METHOD'];
  $request->path = explode("/", substr($_SERVER['PATH_INFO'],1));

  // get Max ID
  function getMaxId($a){
    $maxId = 0;
    foreach($a as $o){
      if($o->id >= $maxId){
        $maxId = $o->id + 1;
      }
    }
    return $maxId;
  }
  require_once('scripts/messages.php');
  require_once('scripts/users.php');
  require_once('scripts/projects.php');
?>