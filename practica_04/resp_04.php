<?php
/*
 * Created by IntelliJ IDEA.
 * User: dsg
 * Date: 19/10/16
 * Time: 17:19
 */

session_start();

if(!isset($_SESSION["click"])) {
    $_SESSION["click"] = -1;
    $_SESSION["ficha2"] = "";
    $_SESSION["id2"] = "";
}
$srcImg2 = "";
$iguales= "";
$carta_anterior="";
$ficha = $_POST["carta"];
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
    "Imagenes/Copo.jpg"]; //ojo faltan 1 dibujo y doblarlo

$a = $imagen[$ficha];

if ($_SESSION["click"] == -1) { //primera vez que clickamos
    $_SESSION["click"]=$id;
    $_SESSION["ficha2"]=$ficha;
    $respuesta = '{"ficha":"'. $a .'", '
        .'"id":"'. $id . '", '
        .'"ficha2":"-1", '
        .'"id2":"-1"}';
    echo $respuesta;
}
else {
    $carta_anterior = $_SESSION['ficha2']; //segunda vez que clickamos
    if ($imagen[$ficha] == $imagen[$carta_anterior]) {
        $iguales = "si";
        $srcImg2 = $imagen[$carta_anterior];
        $respuesta = '{"ficha":"' . $a . '", '
            . '"id":"' . $id . '", '
            . '"ficha2":"' . $srcImg2 . '", '
            . '"id2":"' . $_SESSION["click"] . '"}';
        echo $respuesta;
    }
    else {
        $iguales = "no";

        echo $respuesta;
    }
    $_SESSION["click"] = -1;
}






