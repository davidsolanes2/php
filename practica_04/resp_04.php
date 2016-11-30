<?php
/*
 * Created by IntelliJ IDEA.
 * User: dsg
 * Date: 19/10/16
 * Time: 17:19
 */

session_start();

if(isset($_SESSION["click"])) {
  } else {
    $_SESSION["click"] = "-1";
}
$srcImg2 = "";
$iguales= "";
$num2=""; //anterior
$id_anterior=""; //anterior
$num = $_POST["num"];
$id = $_POST["id"];


$imagen = [
    "Imagenes/Arbol.jpg",
    "Imagenes/Buho.jpg",
    "Imagenes/Elfo.jpg",
    "Imagenes/Estrella.jpg",
    "Imagenes/North Pole.jpg",
    "Imagenes/Reno.jpg",
    "Imagenes/Trineo.jpg",
    "Imagenes/Copo.jpg",
    "Imagenes/Arbol.jpg",
    "Imagenes/Buho.jpg",
    "Imagenes/Elfo.jpg",
    "Imagenes/Estrella.jpg",
    "Imagenes/North Pole.jpg",
    "Imagenes/Reno.jpg",
    "Imagenes/Trineo.jpg",
    "Imagenes/Copo.jpg"];



if ($_SESSION["click"] == "-1") { //primera vez que clickamos
    $_SESSION["click"] = $id;
    $_SESSION["num_inicial"] = $num;

}
else {
    $id_anterior = $_SESSION["click"]; //segunda vez que clickamos
    $num2 = $_SESSION["num_inicial"];
    $iguales = "no";
    if ($imagen[$num] == $imagen[$num2]) {
        $iguales = "si";
    }
    $srcImg2 = $imagen[$num2];
    $_SESSION["click"] = "-1";
}
    $srcImg = $imagen[$num];
    $respuesta = '{"src":"'. $srcImg .'", '
       .'"id":"'. $id . '", '
       .'"src2":"'. $srcImg2 . '", '
       .'"id2":"' . $id_anterior . '", '
       .'"iguales": "' . $iguales . '"}';

   echo $respuesta;

  // shuffle($imagen); sirve para ordenar aleatoriamente el array


