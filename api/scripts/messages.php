<?php
//--------------------------------------//
//                                      //
//              message API             //
//                                      //
//--------------------------------------//

  if(in_array("messages", $request->path)){
    header('Content-Type: application/json');
    $messagesFile = file_get_contents('messages.json');
    $messageList = json_decode($messagesFile);
    // messages GET
    if($request->method == 'GET'){
      if(count($request->path) == 1){
        echo '{"error":"Cannot GET all messages at once"}';
      } else {
        $result = [];
        foreach($messageList as $k=>$message){
          if(strpos($request->path[1], ".") > -1){
            if($request->path[1] == $message->recipient){
              array_push($result, $message);
            }
          } else {
            if($message->id == $request->path[1]){
              array_push($result, $message);
              break;
            }
          }
        }
        echo json_encode($result);
      }
    }
    // messages POST ==> input new message
    if($request->method == 'POST' && count($request->path)==1){
      if($request->data){
        $request->data->id = getMaxId($messageList);
        array_push($messageList, $request->data);
        file_put_contents('messages.json', json_encode($messageList, JSON_PRETTY_PRINT));
        echo json_encode($request->data);
      } else {
        echo '{"error": "No data Supplied for Insert!"}';
      }
    }
    // messages PUT ==> update message
    if($request->method == 'PUT'){
      if(count($request->path)==2){
        if($request->data){
          foreach($messageList as $k=>$message){
            if($message->id == $request->data->id){
              $messageList[$k] = $request->data;
              file_put_contents('messages.json', json_encode($messageList, JSON_PRETTY_PRINT));
              echo '{"success": "Data Updated successfully!"}';
            }
          }
        } else {
          echo '{"error":"No data Supplied for Update!"}';
        }
      } else {
        echo '{"error":"Wrong URL for PUT"}';
      }
    }
    // messages DELETE ==> delete message_error
    if($request->method == 'DELETE'){
      if(count($request->path)==2){
        foreach($messageList as $k=>$message){
          if($message->id == $request->path[1]){
            array_splice($messageList, $k, 1);
            file_put_contents('messages.json', json_encode($messageList, JSON_PRETTY_PRINT));
            echo '{"success":"Message Deleted successfully!"}';
          }
        }
      } else {
        echo '{"error":"Wrong URL for DELETE"}';
      }
    }
    $messagesFile = null;
    $messageList = null;
  }

?>