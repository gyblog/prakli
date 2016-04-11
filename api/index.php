<?php
// INIT app
$app = require('lib/base.php');

// LOAD classes
$app->set('AUTOLOAD', 'classes/');
// INIT DB connection
$db = new \DB\SQL(
  'mysql:host=localhost;port=3306;dbname=prakli',
  'root',
  ''
);
// INIT DB entities
$u = new User($db);
$m = new Message($db);
$p = new Project($db);

//~~~~~~~~~~~~~~~~~~~~~//
// Helper functions    //
//~~~~~~~~~~~~~~~~~~~~~//
// translate DB Query to json object (1st level, plain)
function translate($data){
  $result = [];
  foreach($data as $i=>$v){
    $res = [];
    foreach($v as $ia=>$va){
      $res[$ia] = $va;
      if($ia == 'senton'){
        $res[$ia] = strtotime($va)*1000;
      }
    }
    array_push($result, $res);
  }
  return json_encode($result);
}


//~~~~~~~~~~~~~~~~~~~~~//
// USERS Api section   //
//~~~~~~~~~~~~~~~~~~~~~//
// insert new user
$app->route('POST /user', function($app) use($u) { $data = json_decode($app['BODY']); $u->post($data); });
// get specific user
$app->route('GET /user/@username', function($app, $params) use($u) { echo $u->get($params['username']); });
// update specific user
$app->route('PUT /user/@username', function($app, $params) use($u) { $data = json_decode($app['BODY']); $u->put($data, $params['username']); });
// delete specific user
$app->route('DELETE /user/@username', function($app, $params) use($u){ $u->delete($params['username']); });
// get ALL users from list
$app->route('GET /users', function() use($u) { echo $u->getAll(); });

//~~~~~~~~~~~~~~~~~~~~~~~~~~//
// MESSAGES Api section     //
//~~~~~~~~~~~~~~~~~~~~~~~~~~//
// insert new user
$app->route('POST /message', function($app) use($m) { $data = json_decode($app['BODY']); $m->post($data); });
// get user messages
$app->route('GET /messages/@username', function($app, $params) use($m) { echo $m->getAll($params['username']); });
// delete message
$app->route('DELETE /message/@id', function($app, $params) use($m) { $m->delete($params['id']); });

//~~~~~~~~~~~~~~~~~~~~~~~~~~//
// PROJECTS Api section     //
//~~~~~~~~~~~~~~~~~~~~~~~~~~//
// insert new project
$app->route('POST /project', function($app) use($p) { $data = json_decode($app['BODY']); $p->post($data); });
// update specific project
$app->route('PUT /project/@id', function($app, $params) use($p) { $data = json_decode($app['BODY']); $p->put($data, $params['id']); });
// get specific project
$app->route('GET /project/@id', function($app, $params) use($p) { $p->get($params['id']); });
// get all projects for username
$app->route('GET /projects/@username', function($app, $params) use($p) { $p->getAll($params['username']); });
// get all employee projects for username
$app->route('GET /projects/employees/@username', function($app, $params) use($p) { $p->getEmpl($params['username']); });

$app->route('GET /reports/department', function($app, $params) use($p){$p->getDepartments(); });
$app->route('GET /reports/type', function($app, $params) use($p){$p->getTypes(); });
$app->route('GET /reports/user', function($app, $params) use($p){$p->getAllUsers(); });
$app->route('GET /reports/userprojects', function($app, $params) use($p){$p->getUserProjects(); });
$app->route('GET /reports/usertasks', function($app, $params) use($p){$p->getUserTasks(); });

//~~~~~~~~~~~~~~~~~~~~~~~~~~//
// TYPES Api section        //
//~~~~~~~~~~~~~~~~~~~~~~~~~~//
// get all types
$app->route('GET /types', function($app){
  $typesFile = file_get_contents('types.json');
  $typeList = json_decode($typesFile);
  echo json_encode($typeList);
});
$app->route('POST /types', function($app){
  $types = json_decode($app['BODY']);
  file_put_contents('types.json', json_encode($types, JSON_PRETTY_PRINT));
});
// save all types



// RUN app
$app->run();

?>