<?php
/*
 * Created by IntelliJ IDEA.
 * User: dsg
 * Date: 19/10/16
 * Time: 17:22
 */

$repe=$_POST["repe"];
$par=$_POST["par"];
$paraula="";

while ($repe>0) {
    $paraula.=$par;
    $repe--;
}

$resposta='{"paraula":"'.$paraula.'"}';
echo $resposta;

