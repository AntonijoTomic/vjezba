<?php

class Configuration
{
    public $host ="N/A";
    public $dbName="N/A";
    public  $username="N/A";
    public $password="N/A";
    
    public function __construct($host="", $dbName="", $username="", $password="")
{
$this->host = $host;
$this->dbName = $dbName;
$this->username = $username;
$this->password = $password;
}

}
class Artikl{
    public $Id="N/A";
    public $Naziv ="N/A";
    public $Proizvodac="N/A";
    public $Model="N/A";
    public $Cijena="N/A";
    public $Kolicina ="N/A";
    public function __construct($Id="", $Naziv="", $Proizvodac="", $Model="", $Cijena="", $Kolicina="")
    {
    $this->Id = $Id;
    $this->Naziv = $Naziv;
    $this->Proizvodac = $Proizvodac;
    $this->Model = $Model;
    $this-> Cijena= $Cijena;
    $this-> Kolicina= $Kolicina;
    }

}
?>