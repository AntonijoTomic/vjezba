<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include 'configuration.php';

$data = json_decode(file_get_contents("php://input"), true);

try{
  $sQuery = "UPDATE artikl SET Naziv=:bindNaziv, Proizvodac=:bindProizvodac, Model=:bindModel, Cijena=:bindCijena, Kolicina=:bindKolicina WHERE Id=:bindId";
  $oStatement = $oConnection->prepare($sQuery);
  $oStatement->bindParam(':bindNaziv',$data['nazivPHP']);
  $oStatement->bindParam(':bindProizvodac',$data['proizvodacPHP']);
  $oStatement->bindParam(':bindModel',$data['modelPHP']);
  $oStatement->bindParam(':bindCijena',$data['cijenaPHP']);
  $oStatement->bindParam(':bindKolicina',$data['kolicinaPHP']);
  $oStatement->bindParam(':bindId',$data['idPHP']);
  $oStatement->execute();
}
catch(PDOException $ex){
  die("Update failed: ".$ex->getMessage());
}

?>