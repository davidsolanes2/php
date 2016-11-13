/*
 * Created by dsg on 1/10/16.
 */

$(document).ready(iniciar);

function iniciar() {

    $('#setBlueColor').click(setBlueColor);
    $('#setRedColor').click(setRedColor);
    $('#setInvisible').click(setInvisible);
    $('#setVisible').click(setVisible);
    $('#toggleVisible').click(toggleVisible);
    $('#incSize').click(incSize);
    $('#decRight').click(decRight);
    $('#decSize').click(decSize);
    $('#movimentContinu').click(movimentContinu);
    $('#toggleVisible_01').click(toggleVisible_01);
}

function setBlueColor() {
    $('#header').css('background-color', 'blue')
}
function setRedColor() {
    $('#header').css('background-color', 'red')
}
function setInvisible() {
    $('#header').fadeOut();
}
function setVisible() {
    $('#header').fadeIn();
}
function toggleVisible() {
    $('#header').fadeToggle();
}
function incSize() {
    $('#movContinu').animate({
        height: "+=50px"
    }, 1500);
}
function decRight() {
    $('#movContinu').animate({
        right: "-=50px"
    },
        {duration: 1500,
        step: function (now, fx) {
            $('#movContinu').html(now);

        }}
    );
}
function decSize() {
    $('#movContinu').animate({
        height: "-50px"
    }, 2000);
}

var change = true;

function movimentContinu() {
    if (change){
        change = false;
        $('#movContinu').css('background-color', 'orange');
        derecha();
    }
    else {
        $('#movContinu').css('background-color', 'green');
        $('#movContinu').stop();
        change = true;
    }
}
function derecha() {
    $('#movContinu').animate({
        right: "+=1500px" },
        { duration: 2000,
            complete: function () {
                izquierda();
            }
    });
}
function izquierda() {
    $('#movContinu').animate({
        right: "-=1500px"},
        {duration: 2000,
            complete: function () {
                derecha();
            }
    });
}
function toggleVisible_01() {
    $('#movContinu').fadeToggle();
}