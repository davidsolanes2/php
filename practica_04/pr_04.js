/*
 * Created by dsg on 25/10/16.
 */

$(document).ready(iniciar);

function iniciar() {
    $('#tablero>div').click(checkCarta)
}

function checkCarta() {

    var id = $(this).attr("id");
    var tit = $(this).parent().attr("title");
    $.ajax({
        type :"POST",
        url :"resp_04.php",
        dataType :"json",
        data :{"id":id,
            "num":tit},

        success:function (resp_04) {

            var src=resp_04.src;
            var id=resp_04.id;
            $("#"+id).html("<img src=' " + src + " '/>")

            var iguales = resp_04.iguales;
            if (iguales="si"){
                var id2 = resp_04.id2;
                $("#"+id).off();
                $("#"+id2).off();
            }
            else {
                $("#"+id).html("");
                $("#"+id).html("");

            }
        }
    });
}