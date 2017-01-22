/*
 * Created by david on 19/01/17.
 */

$(document).ready(init);

var lista = new Array(5);

function init() {
    listaArray();
    $("#check_01").click(punto_01);
    $("#check_02").click(punto_02);
    $("#check_03").click(punto_03);
    $("#check_04").click(punto_04);
    $("#check_05").click(punto_05);
    $("#check_06").click(punto_06);
    $("#check_07").click(punto_07);
}

function listaArray() {
    for (i=0; i<lista.length; i++) {
        lista[i] = Math.floor((Math.random()*100+1));
    }
    printlistaArray();
}

function printlistaArray() {
    $('.mano').html("");
    for (j=0; j<lista.length; j++ ) {
        var cuadro = cuadro + '<td>' + lista[j] + '</td>';
    }
    $('.mano').append(cuadro);
}

function punto_01() {
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

}


