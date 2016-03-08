<?php
//--------------------------------------//
//                                      //
//              USER API                //
//                                      //
//--------------------------------------//

  if(in_array("users", $request->path)){
    header('Content-Type: application/json');
    $usersFile = file_get_contents('users.json');
    $userList = json_decode($usersFile);
    // USERS GET
    if($request->method == 'GET'){
      if(count($request->path) == 1){
        echo json_encode($userList);
      } else {
        $result = [];
        foreach($userList as $k=>$user){
          if($user->username == $request->path[1]){
            array_push($result, $user);
            break;
          }
        }
        echo json_encode($result);
      }
    }
    // USERS POST ==> input new user
    if($request->method == 'POST' && count($request->path)==1){
      if($request->data){
        array_push($userList, $request->data);
        file_put_contents('users.json', json_encode($userList, JSON_PRETTY_PRINT));
        echo json_encode($request->data);
      } else {
        echo '[{"error": "No data Supplied for Insert!"}]';
      }
    }
    // USERS PUT ==> update user
    if($request->method == 'PUT'){
      if(count($request->path)==2){
        if($request->data){
          foreach($userList as $k=>$user){
            if($user->username == $request->data->username){
              $userList[$k] = $request->data;
              file_put_contents('users.json', json_encode($userList, JSON_PRETTY_PRINT));
              echo '[{"success": "Data for `'.$request->data->username.'` Updated successfully!"}]';
            }
          }
        } else {
          echo '[{"error":"No data Supplied for Update!"}]';
        }
      } else {
        echo '[{"error":"Wrong URL for PUT"}]';
      }
    }
    // USERS DELETE ==> delete user_error
    if($request->method == 'DELETE'){
      if(count($request->path)==2){
        foreach($userList as $k=>$user){
          if($user->username == $request->path[1]){
            array_splice($userList, $k, 1);
            file_put_contents('users.json', json_encode($userList, JSON_PRETTY_PRINT));
            echo '[{"success":"Users `'.$request->path[1].'` Deleted successfully!"}]';
          }
        }
      } else {
        echo '[{"error":"Wrong URL for DELETE"}]';
      }
    }
    $usersFile = null;
    $userList = null;
  }

?>