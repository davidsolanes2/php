<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 4/07/17
 * Time: 23:49
 */

require_once('./DatabaseContabilidad.php');

$db = new DatabaseContabilidad;

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Contabilidad</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="../PhpContabilidad/Css/conta.css">
    </head>
    <body id="fondo">
    <?php
        if (isset($_POST['nombre'])) {
            if (!empty($_POST['nombre'])) {

                /*$insertable = $db->insertNewUser([
                        'nombre' => $_POST['nombre'],
                        'password' => $_POST['password']
                ]);*/

                $nom = $_POST['nombre'];
                $pass = $_POST['password'];

                foreach ($db->findUser() as $item)
                {
                    if((!strcmp($item->nombre, $nom)) && (!strcmp($item->password, $pass)) ) {
                        header( 'Location: ../PhpContabilidad/Vistas/Principal.php');
                        exit;
                    }
                }

            }

        }

    ?>
        <div class="container">
            <div class="panel-default">
                <div class="panel-body">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4" id="login">
                        <form action="index.php" method="POST">
                            <div class="form-group">
                                <input type="text" name="nombre" id="" class="form-control" placeholder="Nombre">
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" id="" class="form-control" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Validar" class="btn btn-primary">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="panel-footer" id="pie">
                    <h5>Building by:</h5>
                    <h6>Llauna</h6>
                </div>
            </div>
        </div>
    </body>
</html>