<?php
/*
 * Created by PhpStorm.
 * User: david
 * Date: 29/11/16
 * Time: 19:20
 */

session_start();
$response = '{"users":[';
if (!isset($_SESSION["users"])) {
    $user = array();
    $user[$_POST["userName"]] = 0;
    $_SESSION["users"] = $user;
} else {
    $users = $_SESSION["users"];
    $users[$_POST["userName"]] = 0;
    $_SESSION["users"] = $users;

    foreach($users as $user=>$puntuacion){
        $response.='{"name":"'.$user.'", "score":"'.$puntuacion.'"},';
    }
    $response.='{"name":"", "score":""}';
}
$response.=']}';
echo $response;

