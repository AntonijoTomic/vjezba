<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");
$host = 'localhost';
$dbname = 'artikli';
$user = 'root';
$password = '';
$id ='';
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
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
        if(isset($_GET["id"])){
            $id = $_GET['id'];  
            $naziv = $_POST["Naziv"];
            $proizvodac = $_POST["Proizvodac"];
            $model = $_POST["Model"];
            $kolicina = $_POST["Kolicina"];
            $cijena = $_POST["Cijena"];
            $sql = "UPDATE contacts SET Naziv='$naziv', Proizvodac='$proizvodac', model='$Model', kolicina='$Kolicina', cijena='$Cijena' WHERE id = $id"; 
        }else if(isset($_GET["delete"])){
            $delete = $_GET['delete'];  
            $sql = "DELETE FROM artikl WHERE id = $delete"; 
        }else{  
          $name = $_POST["name"];
          $email = $_POST["email"];
          $country = $_POST["country"];
          $city = $_POST["city"];
          $job = $_POST["job"];
 
          $sql = "insert into contacts (Naziv, Proizvodac, Model, Kolicina, Cijena) values ('$naziv', '$proizvodac', '$Model', '$Kolicina', '$Cijena')"; 
        }
      break;
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
/*if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 */
if ($method == 'GET') {
        if (!$id) echo '[';
      for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {/*prolazimo kroz sve ID-eve te tako dobijamo ispis svih */
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
      }
    if (!$id) echo ']';
} /*elseif ($method == 'POST') {
    echo json_encode($result);
} */else {
    echo mysqli_affected_rows($con);
}
 
$con->close();
?>