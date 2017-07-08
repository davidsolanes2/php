/**
 * Created by david on 8/03/17.
 */

var app = angular.module('myApp', ['ngResource']);

app.controller('MyCtrl', ['$scope', 'MyServ',
    function ($scope, MyServ) {
        $scope.pokemons = [];

        //post
        $scope.altaPokemon = function () {
            var pokemon = $scope.pokemon;

            //var formulario = $scope.ficha;

            //console.log(pokemon.apodo);
            //console.log(pokemon);
            //console.log("Alta Pokemon");

            MyServ.consultaPokemon().save({}, pokemon).$promise.then(
                function (respuesta) {

                    $scope.pokemons = respuesta;

                },
                function (respuesta) {
                    $scope.Error = "Error: " + respuesta.status + " " + respuesta.statusText;
                });


        };

        //update
        $scope.editPokemon = function () {
            var pokemon = $scope.pokemon;
            console.log(pokemon);
            MyServ.consultaPokemon().get({apodo: "A11"});
            console.log(MyServ.consultaPokemon(),get({apodo:"A11"}));
            var newPoke = {apodo: 'David', nombre: 'llauna', tipo: "genio", evolucion: 'Super-Llauna'};
            console.log(newPoke);
            MyServ.consultaPokemon().update({apodo: "A11"}, newPoke).$promise.then (
                function (response) {
                    console.log(response);
                    $scope.pokemons = response;
                },
                function (response) {
                    $scope.messError = "Error: " + response.status + " " + response.statusText;
                });
        };

        //delete
        $scope.deletePokemon = function (apodo) {
            MyServ.consultaPokemon().delete({ apodo:apodo }).$promise.then (
                function (respuesta) {
                    $scope.pokemons = respuesta;
                },
                function (respuesta) {
                    $scope.Error = "Error: " + respuesta.status + " " + respuesta.statusText;

                });
        };

}]);

