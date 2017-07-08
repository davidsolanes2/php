<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 8/03/17
 * Time: 17:45
 */
    session_start();

        if(!isset($_SESSION['pokemons'])) {
            $pokemons = array("Bulbasur" => array("apodo" => "A11", "nombre" => "Bulbasur", "tipo" => ["planta", "veneno"], "evolucion" =>"salta")
            , "Ivysaur" => array("apodo" => "A12", "nombre" => "Ivysaur", "tipo" => ["planta", "veneno"], "evolucion"=>"volar"));

            $_SESSION['pokemons'] = $pokemons;
        }

        $pokemons = $_SESSION['pokemons'];


        switch ($_SERVER['REQUEST_METHOD']) {
            case "GET":
                    $id = explode ("pokem/", $_SERVER['REQUEST_URI'])[1];  //id del pokemon
                    echo json_encode($pokemons[$id]);
                break;

            case "GET":
                    $tipo = explode("pokem/", $_SERVER['REQUEST_URI'])[1]; //tipo del pokemon
                    echo json_encode($pokemons[$tipo]);
                break;

            case "PUT":
                    $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1]; //id que vamos actualizar
                    $jsonPokemon = json_decode(file_get_contents("php://input"), false);
                    $pokemons[$jsonPokemon->apodo] = $jsonPokemon;
                    echo json_encode($pokemons);
                break;

            case "DELETE":
                    $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
                    $jsonPokemon = json_encode(file_exists("php://input"), false);
                    unset($pokemons[$id]);
                    echo json_encode($pokemons);
                break;

            case "POST";
                    $jsonPokemon = json_decode(file_get_contents("php://input"), false);
                    $pokemons[$jsonPokemon->apodo]=$jsonPokemon;
                    echo json_encode($pokemons);
                break;

        }

        $_SESSION['pokemons'] = $pokemons;