

/*
 * Created by dsg on 19/10/16.
 */

$(document).ready(iniciar);

function iniciar() {
    $("#sendAjax").click(sendAjax);
}

function sendAjax() {
    var paraula = $("#paraula").val();
    var repe = $("#repe").val();
    $.ajax({
        type:"POST",
        url:"ejemres_04.php",
        dataType:"json",
        data:{"repe":repe,
        "paraula":paraula
        },
        success: function(respJSON) {
            var txt = respJSON.paraula;
            $("#resposta").html(txt);
        }

    });
}
