<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include 'classes.php';
$host = 'localhost';
$dbname = 'artikli';
$user = 'root';
$password = '';
$id ='';
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents("php://input"), true);
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
 
switch ($method) {
    case 'GET':
      if(isset($_GET["id"])){
        $id = $_GET['id'];  
      }     
      $sql = "select * from artikl".($id?" where id=$id":''); 
      break;
    case 'POST':
        if(isset($_GET["delete"])){
            $delete = $_GET['delete'];  
            $sql = "DELETE FROM artikl WHERE id = $delete"; 
        }
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
if ($method == 'GET') {
        if (!$id) echo '[';
      for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {/*prolazimo kroz sve ID-eve te tako dobijamo ispis svih */
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
      }
    if (!$id) echo ']';
} else {
    echo mysqli_affected_rows($con);
}
 
$con->close();

?>