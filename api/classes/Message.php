<?php
class Message {
  private $message;
  function __construct($db){
    $this->message = new \DB\SQL\Mapper($db, 'messages');
  }
  function getAll($uname){
    $messagelist = $this->message->find(array('recipient=?', $uname));
    return translate($messagelist);
    @unlink($messagelist);
  }
  function post($data){
    $this->message->copyFrom($data);
    $this->message->senton = date("Y-m-d H:i:s", $data->senton/1000);
    $this->message->save();
  }
  function delete($id){
    $this->message->load(array('id=?',$id));
    $this->message->erase();
  }
}
?>