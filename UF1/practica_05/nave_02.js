/*
 * Created by david on 29/11/16.
 */

$(document).ready(iniciar);

var nave = $("<img src='Imagenes/nave.png'/>");

function iniciar() {
    $("#usuario").click(registro);
    $("#start").click(empezar);

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
    }

   });
    //37 left, 38 up , 39 right, 40 down

function propiedades(enemigo, random) {
    enemigo.css({
        "position": "absolute",
        "height": "50px",
        "width": "50px",
        "top": random + "px",
        "left": $("#space").width() - enemigo.width()
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
            $("#space").append(enemigo);
            enemigo.animate(
                {
                    "left": "+20"
                },
                {duration: 5000,
                    step: function (now, fx) {
                        if ($(enemigo).hittest($(nave))){
                            enemigo.remove();
                            $('#escudo').animate({
                                "width": "-=20"
                            },
                                {
                                    step: function (now, fx) {
                                        if ($("#escudo").width() == 0) {
                                            alert('GAME OVER');
                                            clearInterval(window);
                                            nave.stop();
                                            enemigo.stop();
                                        }
                                    }
                                });
                        }
                    },
                    complete: function () {
                        //puntos++;
                        enemigo.remove();
                    }
            });

        }
    });

}

function registro() {
    var nombre  = $("#texto").val();
    var puntuacion = $("#puntuacion").val();
    $.ajax({
        type: "POST",
        url: "naveRegistro.php",
        dataType: "json",
        data: { "nombre": nombre,
                "puntuacion" : puntuacion
        },
        success: function (respuesta) {
            var elemento="<ul>";
            for(var nombre in respuesta) {
                console.log(respuesta[nombre]);
                console.log(nombre);
                elemento +="<li>"+"Nombre : "+nombre+"</li><li>"+"Puntuacion : "+respuesta[nombre]+"</li></br>";
            }
            elemento+="</ul>";
            $("#tabla").append(elemento);

        }

    });

}


