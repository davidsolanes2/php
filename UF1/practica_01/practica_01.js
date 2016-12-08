/**
 * Created by dsg on 20/09/16.
 */

function punto_02() {
    var numero;
    do {
        numero= window.prompt("Introdueixi numero : ");
    } while (isNaN(numero) || numero == null)
    numero = parseInt(numero);
    alert("Correcte");

    return numero;
}

function punto_04() {
    var num_01 = punto_02();
    par = new Array();
    impar = new Array();
    var i = 0;
    for(i=num_01 ; i>=0; i--) {
        if (num_01%2 == 0) {
            par.push(num_01);
            num_01--;
        }
        else {
            impar.push(num_01);
            num_01--;
        }
    }
    for(var j=0; j<par.length; j++) {
        document.getElementById('parimpar').innerHTML+=par[j]+"<br>";
    }
    for(var k=0; k<impar.length; k++) {
        document.getElementById('parimpar').innerHTML+=impar[k]+"<br>";
    }
}

function punto_05() {
    var num_02 = punto_02();
    var result = document.getElementById('num');
    result.innerHTML="<ul>";
    for(i = 0; i<=num_02; i++ ) {
        result.innerHTML += "<li>"+ i + "</li>";
    }
    result.innerHTML+="</ul>";
}

function punto_06() {
    var num_03 = punto_02();
    var num_04 = punto_02();
    if (num_03 > num_04) {
        document.getElementById('num_01').innerHTML = (num_03 + " es mayor que " + num_04);
    }
    else {
        document.getElementById('num_01').innerHTML = (num_04 + " es mayor que " + num_03);
    }
}

function punto_07() {
    var dia;

    do {
            dia = window.prompt("Que dia de la semana ? ").toLowerCase();
    }while (dia == null || dia === " ");

    var dia_semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

    for (var l=0; l<dia_semana.length; l++) {
        if (dia == dia_semana[l]) {
            var mostrar_dia = l + 1;
            document.getElementById('num_02').innerHTML = (dia + " es el día numero " + mostrar_dia + " de la semana");
        }
    }
}

function punto_08() {
    var randomnumero = Math.floor((Math.random()*10)+1);
    var intentos=0;

    var div = document.getElementById("console");


    while (num != randomnumero) {

        var num = parseInt(window.prompt("Escribe un numero"));

        if (num>randomnumero) {
            div.innerHTML=("El numero introducido es mayor");
            intentos++;
        }
        else {
            div.innerHTML=("El numero introducido es menor");
            intentos++;
        }
    }

   div.innerHTML += ("Felicidades, has acertado y has utilizado " + intentos + " intentos");
}

function punto_09() {

}

function punto_10a() {
    var num_10;
    var num_11;
    do {
        num_10 = window.prompt("Escribe el primer numero  : ");
        num_11 = window.prompt("Escribe el segundo numero : ");
    }while(isNaN(num_10, num_11)||num_10 == null||num_11 == null||num_10 == ""||num_11 == "");

        num_10 = parseInt(num_10);
        num_11 = parseInt(num_11);

    var result_01 = num_10 + num_11;
    var div = document.getElementById("result_01");
    div.innerHTML += ("La suma de " + num_10 + " y " + num_11 + " es " + result_01);
}

function punto_10b() {
    var num_10;
    var num_11;
    do {
        num_10 = window.prompt("Escribe el primer numero  : ");
        num_11 = window.prompt("Escribe el segundo numero : ");
    }while(isNaN(num_10, num_11)||num_10 == null||num_11 == null||num_10 == ""||num_11 == "");

    num_10 = parseInt(num_10);
    num_11 = parseInt(num_11);

    var result_02 = num_10 - num_11;
    var div = document.getElementById("result_02");
    div.innerHTML += ("La resta de " + num_10 + " y " + num_11 + " es " + result_02);
}

function punto_10c() {
    var num_10;
    var num_11;
    do {
        num_10 = window.prompt("Escribe el primer numero  : ");
        num_11 = window.prompt("Escribe el segundo numero : ");
    }while(isNaN(num_10, num_11)||num_10 == null||num_11 == null||num_10 == ""||num_11 == "");

    num_10 = parseInt(num_10);
    num_11 = parseInt(num_11);

    var result_03 = num_10 * num_11;
    var div = document.getElementById("result_03");
    div.innerHTML += ("La multiplicación de " + num_10 + " y " + num_11 + " es " + result_03);
}

function punto_10d() {

    do {
        var num_10 = window.prompt("Escribe el primer numero  : ");
        var num_11 = window.prompt("Escribe el segundo numero : ");
    } while (isNaN(num_10, num_11) || num_10 == null || num_11 == null || num_10 == "" || num_11 == "");

    num_10 = parseInt(num_10);
    num_11 = parseInt(num_11);
    var lista = document.getElementById("result_04");

    if (num_11 != 0) {
        var result_04 = num_10 / num_11;
        lista.innerHTML += "La division de " + num_10 + " entre " + num_11 + " es igual a " + result_04;
    }
    else {
        lista.innerHTML += "<div class='alert alter-danger id='alertError'>No se puede dividir</div";
    }

}