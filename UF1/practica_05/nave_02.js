/**
 * Created by david on 29/11/16.
 */

$(document).ready(init);

var nave = $("<img src='Imagenes/nave.png'/>");
var intervalo;
var puntos=0;

var keyMap = {
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    fire: 32
};

function init() {
    nave.css("position", "absolute");
    $("#space").append(nave);
}

$(document).keyup(function (a) {
    switch (a.which) {
        case 37:
            nave.stop().animate({
                left: '-=100'
            });
            break;
        case 38:
            nave.stop().animate({
                top: '-=100'
            });
            break;
        case 39:
            nave.stop().animate({
                left: '+=100'
            });
            break;
        case 40:
            nave.stop().animate({
                top: '+=100'
            })
            break;

    }
});