<?php
/*
 * Created by PhpStorm.
 * User: david
 * Date: 29/11/16000
 * Time: 19:20
 */

$cadena="host='127.0.0.1' port='5432' dbname='pilotos' user='postgres' password='d4v1d001'";
$con = pg_connect($cadena) or die("Error en la conexion".pg_last_error());

$resultado = pg_query($con, "SELECT * FROM usuarios");
