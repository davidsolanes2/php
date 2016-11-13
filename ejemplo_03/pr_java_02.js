/*
 * Created by dsg on 27/09/16.
 */



$(document).ready(iniciar);

function iniciar() {
    $("#popUp").fadeOut();
    $("#intermitent").fadeOut();
    $("#contenidorDivs>div").mouseenter(incSize);
    $("#contenidorDivs>div").mouseout(decSize);
    $("#setBlueColor").click(setBlueColor);
    $("#setRedColor").click(setRedColor);
    $("#showPop").click(tooglePopUp);
    $("#popUp").click(ocultaPopUp);
    $("#intermitent").click(toogleColors);
}
var aux ="blanco";

function toogleColors() {
    $("#intermitent").animate(
        {"background-color":"yellow",
            "width":"200px"},
        {"duration":2000,
            "complete":setYellow }
    );
}

function setYellow() {
    $("#intermitent").css(
        {"background-color":"yellow"}
    );
    toogleColorsWhite();
}

function toogleColorsWhite() {
    $("#intermitent").animate(
        {
            "width":"500px"},
        {"duration":2000,
            "complete": setWhite }
    );
}

function setWhite(){
    $("#intermitent").css(
        {"background-color":"white"}
    );
    toogleColors();
}

function  tooglePopUp() {
    $("#popUp,#intermitent").fadeIn();
}

function  ocultaPopUp() {
    $("#popUp,#intermitent").fadeOut();
}

function setRedColor() {
    $("#setBlueColor").css({
        "background-color" : "red"
    });
    $("#setBlueColor").fadeIn;
    $(this).fadeOut();
}
function setBlueColor() {
    $("#setRedColor").css({
        "background-color" : "blue"
    });
    $("#setRedColor").fadeIn;
    $(this).fadeOut();
}

function incSize() {
    //$(this).css('height', "+=30");
    $(this).css({
        'height':"+=30",
        'width':"+=30"
    });
}

function decSize() {
    $(this).css({
        'height':"-=30",
        'width':"-=30"
    });
}
