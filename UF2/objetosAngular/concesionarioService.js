/*
 * Created by david on 24/01/17.
 */

app.service('serviceConcesionario', function () {

    this.concesionarios = [];

    function Coche( modelo, marca, precio, extras) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.extras = extras || [];
    }

    function Concesionario(nombre, direccion, pedidos) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.pedidos = pedidos || [];

        this.altaPedidos = function (coche) {
            this.pedidos.push(coche);
        };
    }

    this.altaConcesionario = function (nombre, direccion) {
        var aux = new Concesionario();
        aux.nombre = nombre;
        aux.direccion = direccion;
        this.concesionarios.push(aux);
        return aux;
    };

    this.altaCoche = function (modelo, marca, precio, extras) {
        var coche = new Coche();
        coche.modelo = modelo;
        coche.marca = marca;
        coche.precio = precio;
        coche.extras = extras;
        return coche;
    };

    this.altaCocheConcesionario = function (numConcesionario, modelo, marca, precio, extras) {
        var coche = new Coche();
        coche.modelo = modelo;
        coche.marca = marca;
        coche.precio = precio;
        coche.extras = extras;

        this.concesionarios[numConcesionario].altaPedidos(coche);
    };

    this.altaPedidos = function(numConcesionario, coche) {
        this.concesionarios[numConcesionario].altaPedidos(coche);
    }


});
