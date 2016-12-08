/*
 * Created by dsg on 25/10/16.
 */

$(document).ready(iniciar);

function iniciar() {
    $('#check').click(empezar);
    $(".carta").click(checkCarta);
}

function checkCarta() {
    var tit = $(this).attr("title");
    var id = $(this).attr("id");
    $.ajax({
        type :"POST",
        url :"resp_04.php",
        dataType :"json",
        data :{"id": id,
            "num": tit},
        success:function(respuesta) {
            var src = respuesta.src;
            var id = respuesta.id;
            var id2 = respuesta.id2;
            
            $("#" + id).attr("src", src);
            var iguales = respuesta.iguales;
            if(iguales === "si") {
                //var id2 = respuesta.id2;
                $("#"+id).off();
                $("#"+id2).off();
            }
            else if (iguales === "no" ) {
                window.setTimeout(function () {
                    $("#"+id).attr("src","Imagenes/memory.jpg");
                    $("#"+id2).attr("src","Imagenes/memory.jpg");
                }, 1500);
            }
        }
    });
}

function empezar() {
    
}