/**
 * Created by david on 14/02/17.
 */

var app = angular.module('appEquipos', []);

app.controller ('controllerJugador' ['$scope', 'serviceJugador', '$http',
    function ($scope, serviceJugador, $http) {

        $scope.equipos = serviceJugador.equipos;


    }
]);

