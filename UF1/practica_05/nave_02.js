/*
 * Created by david on 29/11/16.
 */

$(document).ready(iniciar);

var nave = $("<img src='Imagenes/nave.png'/>");
var morfic = $("<img src='Imagenes/morfic.png'/>");

function iniciar() {
    $("#usuario").click(registro);
    $("#start").click(empezar);
    $("#envio").click(registro);

}

function enemigos() {
    window.setInterval(ataque, 2000);

}


function empezar() {
    $("#space").append(nave);
    nave.css("position", "absolute");
    enemigos();
}

   $(document).keypress(function(move) {

       //var ancho = 15;
       //var alto = 173;

       var x = $(nave).position();
       var alto = x.top;
       var ancho = x.left;
        {
        if (move.keyCode === 39 && ancho<1050) {
            nave.animate({
                left: '+=10px'
            }, 1);
            var x = $(nave).position();
            var a = x.top;
            var b = x.left;
            ancho = b;
            alto = a;
        }
        if (move.keyCode === 37 && ancho>15) {
            nave.animate({
                left: '-=10px'
            }, 1);
            var x = $(nave).position();
            var c = x.top;
            var d = x.left;
            alto = c;

        }
        if (move.keyCode === 38 && alto>165) {
            nave.animate({
                top: '-=10px'
            }, 1);
            var x = $(nave).position();
            var e = x.top;
            var f = x.left;
            alto = e;
        }
        if (move.keyCode === 40 && alto<465) {
            nave.animate({
                top: '+=10px'
            }, 1);
            var x = $(nave).position();
            var g = x.top;
            var h = x.left

        }
        if (keyCode === 77) {
            $("#space").append(morfic);
                morfic.css({
                "position":"absolute",
                "width:100%":"heigth: 100%",
                }, 1);
            }


    }




   });
    //37 left, 38 up , 39 right, 40 down

function propiedades(enemigo, random) {
    enemigo.css({
        "position": "absolute",
        "height": "50px",
        "width": "50px",
        "top": random + "px",
        "left": $("#space").width() - 65
    });
}

function ataque() {
    $.ajax({
        type: "POST",
        url: "randomnvImperial.php",
        dataType: 'json',
        data: {height: $("#space").css("height")},
        success: function (respuesta) {
            var enemigo = $("<img src = 'Imagenes/naveImperial.png'/>");
            propiedades(enemigo, respuesta.random);
            $("#subject").append(enemigo);
            enemigo.animate(
                {
                    "left": "+15"
                },
                {duration: 5000,
                    step: function (now, fx) {
                        if ($(enemigo).hittest($(nave))){
                            $(enemigo).remove();
                            $("#escudo").animate({
                                "width": "-=10"
                            },
                                {
                                    step: function (now, fx) {
                                        if ($("#escudo").width() == 0) {
                                            clearInterval(window);
                                            nave.stop();
                                            $(enemigo).stop();
                                            alert('GAME OVER');
                                        }
                                    }
                                }
                                );
                        }
                    },
                    complete: function () {
                        $(enemigo).remove();
                        puntos++;
                    }
            });

        }
    });

}

function registro() {
    var warning = $("<p class='alert-danger'><strong>El Campo no puede quedar vacio!</strong>\n\
                    </p>");

    if ($("#userName").val() == "") {
        $("#usuarios").append(warning);
    } else {
        warning.remove();
        $.ajax({
            type: "POST",
            url: "naveRegistro.php",
            dataType: "json",
            data: {userName: $("#userName").val()},
            success: function (response) {
                var ul = "<ul>";
                for (var name in response.users) {
                    if (response.users[name].name != "") {
                        ul += "<li>Name: " + response.users[name].name + ", score: " + response.users[name].score + "</li>";
                    }
                }
                ul += "</ul>";
                $("#usersList > ul > li").remove();
                $("#usersList").html(ul);
                $("#start").fadeIn();
            }
        });
    }
}



