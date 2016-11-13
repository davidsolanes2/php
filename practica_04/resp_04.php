<?php
/*
 * Created by IntelliJ IDEA.
 * User: dsg
 * Date: 19/10/16
 * Time: 17:19
 */

session_start();

if(isset($_SESSION["nimagen"])) {

}
else {$_SESSION["nimagen"]="-1";}

$id = $_POST["id"];
$num = $_POST["num"];
$id_anterior="";
$num_anterior="";
$srcImg2 = "";
$iguales= "";

$imagen = [
    'Imagenes/Arbol.jpg',
    'Imagenes/Buho.jpg',
    'Imagenes/Elfo.jpg',
    'Imagenes/Estrella.jpg',
    'Imagenes/North Pole.jpg',
    'Imagenes/Reno.jpg',
    'Imagenes/Trineo.jpg',
    'Imagenes/North Pole.jpg'];

if ($_SESSION["nimagen"]=="-1") {
    //primera vez que clickamos
    $_SESSION["nimagen"]=$id;
    $_SESSION["num_inicial"]=$num;
}
else {
    //segunda vez que clickamos
    $id_anterior = $_SESSION["nimagen"];
    $num_anterior = $_SESSION["num_inicial"];
    $iguales = false;
    if ($imagen[$num] = $imagen[$num_anterior]) {
        $iguales=true;
    }

    $srcImg2 = $imagen[$num_anterior];


    $_SESSION["nimagen"]="-1";
}

$srcImg = $imagen[$num];
$srcImg2 = $imagen[$num_anterior];

$resp_04='{"src":" '.$srcImg.' ", "id":"'.$id.' " ' . ' "src2":" '.$srcImg2.'}';
//revisar codigo


echo $resp_04;