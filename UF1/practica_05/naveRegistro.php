<?php
/*
 * Created by PhpStorm.
 * User: david
 * Date: 29/11/16
 * Time: 19:20
 */

session_start();

if (!isset($_SESSION["array"])) {
    $arr[0][0] = $_POST['nombre'];
    $arr[0][1] = 0;
    $_SESSION["array"] = $arr;
}

$respuesta="{";

if ($_POST["puntuacion"] == 0) {
    $resultado = count($_SESSION["array"]);
    $_SESSION["array"][$resultado][0] = $_POST['nombre'];
    $_SESSION["array"][$resultado][1] = 0;

    $respuesta = "{";

    for ($i = 0; $i < count($_SESSION['array']); $i++) {
        $respuesta .= '"' . $_SESSION['array'][$i][0] . '":"' . $_SESSION['array'][$i][1] . '",';
    }

    $respuesta .= '"":""}';
    echo $respuesta;
}
else {
    $resultado = $_POST['puntuacion'];
    $_SESSION["array"][$resultado][1] = $_POST['puntuacion'];
    echo $resultado;
}

if (isset($_POST['lista']) && isset($_SESSION["array"])) {

}