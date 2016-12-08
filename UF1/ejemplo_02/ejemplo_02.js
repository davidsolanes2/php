/*
 * Created by dsg on 5/10/16.
 */

$(document).ready(iniciar);

function iniciar() {
    $("#setClass").click(setClass);
    $("#setAttr").click(setAttr);
    $("#addElem").click(addElem);
}

function addElem() {
    var div = $("<div></div>");
    var txt = $("#setClass").attr("class");
    div.addClass(txt);
    div.dblclick(borrame);
    div.appendTo("#contenidorDivs");
    div.html("<b>hola</b>");
}

function borrame() {
    $(this).remove();
}

function setAttr() {
    var tex=$("input").val();
    $(this).attr("myAttr", text);
}

function setClass() {
    var clas=$("input").val();
    $(this).addClass(clas);
}
