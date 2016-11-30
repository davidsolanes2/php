<?php
/*
 * Created by PhpStorm.
 * User: david
 * Date: 29/11/16000
 * Time: 19:20
 */

$usuario = "postgres";
$pass = "d4v1d001";
$host = "127.0.0.1";
$bd = "pilotos";

function conectar_PostgreSQL( $usuario, $pass, $host, $bd )
{
    $conexion = null;

    try
    {
        $conexion = pg_connect( "user=".$usuario." ".
            "password=".$pass." ".
            "host=".$host." ".
            "dbname=".$bd
        );
        if($conexion == false) {
            throw new Exception("No hay conexion".pg_last_error());
        }

    }
    catch (Exception $e) {
        throw $e;
    }
    return $conexion;
}

if (!empty($_POST)) {
    if (isset($_POST['fname'])) {

    }
}