/*
 * Created by david on 24/01/17.
 */

function Coche(nombre, precio, extras) {
    this.nombre = nombre;
    this.precio = precio;
    this.extras = extras || [];
}

function Concesionario(nombre, direccion, pedidos) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.pedidos = pedidos || [];
}

angular.module('app', [])
    .controller('controller', ['$scope', function ($scope) {

    }]);
