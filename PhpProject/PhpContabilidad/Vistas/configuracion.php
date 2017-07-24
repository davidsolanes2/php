<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 15/07/17
 * Time: 18:02
 */

 require_once ('/home/david/Workspace/php/PhpProject/vendor/autoload.php');


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contabilidad</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="../Css/conta.css">
    <link rel="stylesheet" href="../Css/containerConfiguracion.css">
</head>
<body id="fondo1">
<div class="container">
    <div class="panel-default">
        <div class="panel-header">
            <h1 id="titulo">Configuracion</h1>
            <hr>
        </div>
        <div class="panel-body">
            <div class="panel-body">
                <div class="row">
                    <!--
                    <div id="container">
                        <input id="tab-1" type="radio" name="tab-group" checked="checked"/>
                        <label for="tab-1">Altas</label>
                        <input id="tab-2" type="radio" name="tab-group">
                        <label for="tab-2">Bajas</label>
                        <input id="tab-3" type="radio" name="tab-group">
                        <label for="tab-3">Modificacion</label>
                        <div id="content">
                            <div id="content-1">
                                <h1>Contenido de la alta</h1>
                            </div>
                            <div id="content-2">
                                <h1>Contenido de la baja</h1>
                            </div>
                            <div id="content-3">
                                <h1>Contenido de la modificacion</h1>
                            </div>
                        </div>
                    </div>
                    -->
                </div>
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">

                        <?php

                            $tabla = "<table border='1px' cellspacing='1px' cellpadding='10px'>";
                                foreach ($db->findUser() as $item) {
                                    //echo $item->nombre;
                                    $tabla .= "<tr><td>$item->nombre</td><td>$item->password</td></tr>";
                                }
                            $tabla .= "</table>";

                            echo $tabla;

                        ?>
                    </div>
                    <div class="col-sm-4"></div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <form action="Principal.php"  method="POST">
                            <input type="submit" value="Pagina Anterior" class="btn btn-primary">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
