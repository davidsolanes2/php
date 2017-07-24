<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 18/07/17
 * Time: 21:59
 */

    class usuariosController {

        public function usuariosController() { }

        public function altaUsuarios($usuarios) {
            include_once("../Domain/Usuarios.php");
            $connection = new MongoClient();
            $db = $connection->Contabilidad;
            $collection = $db->usuarios;
            $obj = array("nombre" => $usuarios->getNombre(), "password" => $usuarios->getPassword());
            try {
                $collection->insert($obj);
                return true;
            } catch (Exception $e) {
                return false;
            }
        }

        public function listaUsuarios() {

        }

        public function eliminarUsuarios() {

        }

        public function buscarUsuarios() {

        }

    }

    ?>