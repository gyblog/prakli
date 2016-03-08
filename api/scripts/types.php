<?php
  if(in_array("types", $request->path)){
    header('Content-Type: application/json');
    $typesFile = file_get_contents('types.json');
    $typeList = json_decode($typesFile);
    // TYPES GET
    if($request->method == 'GET'){
      if(count($request->path) == 1){
        echo json_encode($typeList);
      }
    }
    // USERS PUT ==> update user
    if($request->method == 'PUT'){
      if(count($request->path)==1){
        if($request->data){
          $typeList = $request->data;
          file_put_contents('types.json', json_encode($typeList, JSON_PRETTY_PRINT));
          echo '[{"success": "Data for TYPES Updated successfully!"}]';
        } else {
          echo '[{"error":"No data Supplied for Update!"}]';
        }
      } else {
        echo '[{"error":"Wrong URL for PUT"}]';
      }
    }


  }
?>