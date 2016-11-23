/*
 * Created by dsg on 25/10/16.
 */

$(document).ready(iniciar);

var carta = $("<img src= 'Imagenes/memory.jpg'/>");

function iniciar() {
    $('#check').click();
    $('#tablero').find('div>img').click(checkCarta)
}

function checkCarta() {
    var ficha = $(this).attr('title');
    var padre = $(this).parent().attr('id');

    $.ajax({
        type :"POST",
        url :"resp_04.php",
        dataType :"json",
        data :{"carta":ficha,
            "id":padre},

        success:function(respuesta) {
            var a = respuesta.ficha;
            var b = respuesta.id;
            var c = respuesta.id2;
            var i = $('<img />');
            i.attr('src',a);

            $("#"+b+">img").remove();
            $("#"+b).append(i);
            $("#"+b).off();
            $("#"+c).off();

            //controlar aqui si las tarjetas son iguales ?

            var iguales = respuesta.iguales;
            if(iguales === "si") {
                var id2 = respuesta.id2;
                $("#"+b).off();
                $("#"+c).off();
            }

            if (iguales === "no" ) {
            //if (c != -1) {
              var id2 = respuesta.id2;
                window.setTimeout(function () {
                    $("#"+b).html(carta);
                    $("#"+c).html(carta);
                }, 1500);
            }
        }
    });
}