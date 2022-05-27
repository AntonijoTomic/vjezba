<?php
include 'configuration.php';
//include "classes.php";
header('Access-Control-Allow-Origin: *');


//var_dump($_POST);
$query = "Insert into artikl (Naziv,Proizvodac,Model,Kolicina,Cijena) values('".$_POST['Naziv']."','".$_POST['Proizvodac']."','".$_POST['Model']."',".intval($_POST['Kolicina']).",".floatval($_POST['Cijena']).")";
echo $query;
$result = $oConnection->query($query);

?>