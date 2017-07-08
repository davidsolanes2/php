<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 4/07/17
 * Time: 23:49
 */

    require_once('./MongodbDatabase.php');

    $db = new MongodbDatabase;

    //print_r($db->insertNewItem([
    //    'videoTitle' => 'Interestelar',
    //    'videoLink' => 'http://paramont',
    //    'videoID' => '1A25B58GF',
    //    'videoArtist' => 'David'
    //]));
    //exit();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>MongoDB</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <body>
        <?php
             if(isset($_POST['videoTitle'])) {
                 if (!empty($_POST['videoTitle'])) {
                    $insertable = $db->insertNewItem([
                        'videoTitle' => $_POST['videoTitle'],
                        'videoLink' => $_POST['videoLink'],
                        'videoID' => $_POST['videoID'],
                        'videoArtist' => $_POST['videoArtist']
                    ]);
                    if ($insertable) {
                        ?>
                            <div class="container">
                                 <div class="panel">
                                     <h3>Nuevo video insertado</h3>
                                 </div>
                            </div>
                        <?php
                    }
                 }
             }
        ?>
        <div class="container">
            <div class="col-sm-6">
                
                <div class="panel-default">
                    <div class="panel-heading">
                        <b>Añadir Video</b>
                    </div>
                    <div class="panel-body">
                        <form action="index.php" method="POST">
                            <div class="form-group">
                                <input type="text" name="videoTitle" id="" class="form-control" placeholder="titulo">
                            </div>
                            <div class="form-group">
                                <input type="text" name="videoLink" id="" class="form-control" placeholder="link">
                            </div>
                            <div class="form-group">
                                <input type="text" name="videoID" id="" class="form-control" placeholder="id">
                            </div>
                            <div class="form-group">
                               <input type="text" name="videoArtist" id="" class="form-control" placeholder="artista">
                            </div>
                            <div class="form-group">
                               <input type="submit" value="Guardar" class="btn btn-danger">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-6>">
                <h1>Lista de videos</h1>
                <?php
                    foreach ($db->findItem() as $item) {
                        echo '<div>'.$item->videoArtist.'</div>';
                    }
                ?>
            </div>
        </div>
    </body>
</html>