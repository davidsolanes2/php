<?php
/*
 * Created by PhpStorm.
 * User: david
 * Date: 30/12/16
 * Time: 19:30
 */

$random = mt_rand(170, 510);

$respuesta = '{"random":"' .$random.'"}';

echo $respuesta;