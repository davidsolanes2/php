<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 4/07/17
 * Time: 22:58
 */

    require_once ('../vendor/autoload.php');

    class MongodbDatabase {

        function __construct()
        {
            $this->db = ( new MongoDB\Client) ->videoPlaylist->videos;
        }

        public function insertNewItem($itemInfo=[]){
            if(empty($itemInfo)) {
                return false;
            }

            $insertable = $this->db->insertOne([
                'videoTitle' => $itemInfo['videoTitle'],
                'videoLink' => $itemInfo['videoLink'],
                'videoID' => $itemInfo['videoID'],
                'videoArtist' => $itemInfo['videoArtist']
            ]);

            return $insertable-> getInsertedId();
        }

        public function findItem() {

            return $this->db->find();

        }

    }