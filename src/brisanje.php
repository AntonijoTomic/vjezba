<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include 'configuration.php';

$data = json_decode(file_get_contents("php://input"), true);
try{
  $sQuery = "DELETE FROM artikl WHERE Id=:bindId";
  $oStatement = $oConnection->prepare($sQuery);
  $oStatement->bindParam(':bindId',$data);
  $oStatement->execute();
}
catch(PDOException $ex){
  echo("Brisanje nije uspjelo! -> ".$ex->getMessage());
}

echo $data;

?>