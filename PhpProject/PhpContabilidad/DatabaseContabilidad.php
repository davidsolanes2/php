<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 4/07/17
 * Time: 22:58
 */

    require_once ('../vendor/autoload.php');

    class DatabaseContabilidad {

        function __construct()
        {
            $this->db = ( new MongoDB\Client) ->Contabilidad->usuarios;
        }

        public function insertNewUser($itemInfo=[]){
            if(empty($itemInfo)) {
                return false;
            }

            $insertable = $this->db->insertOne([
                'nombre' => $itemInfo['nombre'],
                'password' => $itemInfo['password'],
            ]);

            return $insertable-> getInsertedId();
        }

        public function findUser() {

            return $this->db->find();
        }

}