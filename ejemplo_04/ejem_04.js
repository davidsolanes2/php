var $ = require("./jquery-3.1.1.js");
/*
 * Created by dsg on 19/10/16.
 */

$(document).ready(iniciar);

function iniciar() {
    $('#sendAjax').click(sendAjax);
}

function sendAjax() {
    var paraula = $('#paraula').val();
    var repe = $('#repe').val();
    $.ajax({
        type:"POST",
        url:"ejemres_04.php",
        dataType:"json",
        data:{"repe":repe,
        "paraula":paraula
        },
        success: function(restJSON) {
            var txt = restJSON.paraula;
            $('#resposta').html(txt);
        },
        async:true
    });
}
