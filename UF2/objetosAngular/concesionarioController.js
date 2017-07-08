/*
 * Created by david on 24/01/17.
 */

var app = angular.module('appVehiculos', []);

app.controller('controllerConcesionario', ['$scope', 'serviceConcesionario', '$http',
    function ($scope, serviceConcesionario, $http) {

        $scope.concesionarios = serviceConcesionario.concesionarios;

        $scope.concesionario1 = serviceConcesionario.altaConcesionario(" Automoviles El Rayo", " C/Badajoz, nº 26 ");
        $scope.concesionario2 = serviceConcesionario.altaConcesionario(" Masterclass, SA", " C/Badajoz, nº 30 ");
        $scope.concesionario3 = serviceConcesionario.altaConcesionario(" Automoviles Bertran, SA", " C/Badajoz, nº 36 ");

        $scope.coche1 = serviceConcesionario.altaCoche("Mustang", "Ford", "80.000 €",["Camara Vision Trasera"]);
        $scope.coche2 = serviceConcesionario.altaCoche("Ibiza", "Seat", "18.000 €",["Luces led", "Climatizador"]);
        $scope.coche3 = serviceConcesionario.altaCoche("Verso", "Toyota", "20.000 €",["Navegador", "Camara Trasera"]);

        serviceConcesionario.altaPedidos(1, $scope.coche1);
        serviceConcesionario.altaPedidos(0, $scope.coche2);
        serviceConcesionario.altaPedidos(1, $scope.coche3);

        $scope.altaCoche = function () {
            $scope.extras = $scope.extras.split(",");
            serviceConcesionario.altaCocheConcesionario($scope.selConcesionario, $scope.modelo, $scope.marca, $scope.precio, $scope.extras);

            /*$scope.formulario = {
                marca: "",
                modelo: "",
                precio: "",
                extras: ""
            };

            //var oriForm*/

        };

        $http.get("pedidos").then(function (response) {
            $scope.concesionarios[selConcesionario].pedidos = response.data;
        });
        $scope.orderByMe = function (coche) {
            $scope.myOrderBy = coche;
        }


    }
]);