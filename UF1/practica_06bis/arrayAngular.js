/*
 * Created by david on 23/01/17.
 */

var lista = new Array(5);

function listaArray() {
    for (i=0; i<lista.length; i++) {
        lista[i] = Math.floor((Math.random()*100+1));
    }
    printlistaArray();
}

function printlistaArray() {
    $('.mano').html("");
    for ( var j=0; j<lista.length; j++ ) {
        var cuadro = cuadro + '<td>' + lista[j] + '</td>';
    }
    $('.mano').append(cuadro);
}


angular.module('app', [])
    .controller('controller', ['$scope', function($scope) {
        listaArray();
        $scope.lista = lista;
        $scope.primero = "";
        $scope.ultimo = "";
        $scope.resultado = "";


        $scope.punto_01 = function () {
            var primero = lista[0];
            var ultimo = lista[lista.length-1];
            //var resultado = "";
            $scope.resultado_01 = 'Primero : ' + primero;
            $scope.resultado_02 = 'Ultimo  : ' + ultimo;
        };

        $scope.punto_02 = function () {
            do {
                var num = window.prompt("Número : ");
            } while (isNaN(num) || num == null || num == "");
            lista.push(num);
            printlistaArray();
        };

        $scope.punto_03 = function () {
            do {
                var num = window.prompt("Número : ");
            } while (isNaN(num) || num == null || num == "");

            num = parseInt(num);

            lista.unshift(num);
            printlistaArray();
        };

        $scope.punto_04 = function () {
            lista.pop();
            printlistaArray();
        };

        $scope.punto_05 = function () { //revisar
            var subtot ="";
            do {
                var op = window.prompt("Que operacion realizaremos (+ , - , / , *) : ");
            } while (!isNaN(op) || op == null || op == "");



            for (var i=0; i<lista.length; i++) {
                subtot += lista[i];
                if (i != lista.length-1) {
                    subtot += op;
                }
            }
            var tot = eval(subtot);

            $scope.resultado_03 = 'Total : ' + tot;
        };

        $scope.punto_06 = function () {
            do {
                var num = window.prompt("Posición : ");
            } while (isNaN(num) || num == null || num == "");

            num = parseInt(num);

            if (num > lista.length) {
                alert("NO es correcto");
            }
            else {
                lista.splice(num-1, 1);
                printlistaArray();
            }
        };

        $scope.punto_07 = function () {
            do {
                var num = window.prompt("Número : ");
            } while (isNaN(num) || num == null || num == "");

            num = parseInt(num);

            var aux = lista.indexOf(num);

            if (aux >-1) {
                lista.splice(aux, 1);
            }
            else {
                alert("NO es correcto");
            }
            printlistaArray();
        }


    }]);



/*function punto_01() {
    var first = lista[0];
    var last = lista[lista.length-1];

    $('.resultado').html("");
    $('.resultado').append("<div class='row'><strong> Primer numero : </strong>" + first + "</div>");
    $('.resultado').append("<div class='row'><strong> Ultimo numero : </strong>" + last + "</div>");
}

function punto_02() {
    do {
        num = window.prompt("Número : ");
    } while (isNaN(num) || num == null || num == "");

    num = parseInt(num);
    lista.push(num);
    printlistaArray();
}

function punto_03() {
    //añadir al inicio
    do {
        var num = window.prompt("Número : ");
    } while (isNaN(num) || num == null || num == "");

    num = parseInt(num);
    lista.unshift(num);
    printlistaArray();
}

function punto_04() {
    //borrar el ultimo
    lista.pop();
    printlistaArray();
}

function punto_05() {

    var tot;
    var subtot;

    do {
        var op = window.prompt("Que operacion realizaremos (+ , - , / , *) : ");
    } while (!isNaN(op) || op == null || op == "");

    for (i=0; i<lista.length; i++) {
        subtot += lista[i];
        if (i != lista.length-1) {
            subtot += op;
        }
    }

    tot = eval(subtot);
    $('.resultado').html("");
    $('.resultado').append("<div class='row'><strong> Total : </strong>" + tot + "</div>");
}

function punto_06() {
    //borrar el numero de la posicion seleccionada
    do {
        var num = window.prompt("Posición : ");
    } while (isNaN(num) || num == null || num == "");

    num = parseInt(num);

    if (num > lista.length) {
        alert("NO es correcto");
    }
    else {
        lista.splice(num-1, 1);
        printlistaArray();
    }
}

function punto_07() {
    //borrar un numero por teclado
    do {
        var num = window.prompt("Posición : ");
    } while (isNaN(num) || num == null || num == "");

    num = parseInt(num);

    var aux = lista.indexOf(num);

    if (aux >-1) {
        lista.splice(aux, 1);
    }
    else {
        alert("NO es correcto");
    }
    printlistaArray();

}*/
