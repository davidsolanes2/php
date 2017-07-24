<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 10/07/17
 * Time: 18:31
 */

    //require_once('../DatabaseContabilidad.php');

    //$db = new DatabaseContabilidad;


?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Contabilidad</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="../Css/conta.css">
    </head>
    <body id="fondo1">
        <div class="container">
            <div class="panel-default">
                <div class="panel-header">
                    <h1 id="titulo">Gestion Financiera</h1>
                    <hr>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">
                            <form action="configuracion.php"  method="POST">
                                <input type="image" src="../Image/libro_08.png" width="100px" height="100px">
                                <h6>Usuarios</h6>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
