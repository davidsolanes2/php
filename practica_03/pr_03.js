/*
 * Created by dsg on 8/10/16.
 */

$(document).ready(iniciar);

function iniciar() {
    $("#fichas_01").find("img").click(seleccion_01);
    $("#seleccion").click(retorno_ficha);
    $(".carta").click(tablero);
    $("#check").click(validar);

}
/* Seleccionamos una ficha */
function seleccion_01() {
    if($("#seleccion").children().length>0){  /* Validamos que solo haya un ficha en la casilla */
        $("#seleccion>img").appendTo("#fichas_01");
    }
    $(this).appendTo("#seleccion");
}
/* Retorno */
function retorno_ficha() {
    $(this).children("img").appendTo("#fichas_01");
}
/* Colocamos la ficha en el tablero */
function tablero() {
    if($(this).children().length===0){
        $("#seleccion>img").off();
        $("#seleccion>img").appendTo($(this));
    }
    else {
        if ($("#seleccion").children().length!==0) {
            var foto =$("#seleccion>img");
        }
        $(this).children("img").click(seleccion_01);
        $(this).children("img").appendTo("#seleccion");
        foto.appendTo($(this));
    }
}

function validar() {
    var cartes = $(".carta");
    var cont = 0;
    cartes.each(function (i) {
        var image = $(this).children().attr("src");
        var route = fichas_final["ficha"+(i+1)];
        route =  "Imagenes/"+ route + ".jpg";
        if (image===route) {
            cont++;
            $(this).css({"border":"5px solid green"});
        }
        else {
            $(this).css({"border":"5px solid red"});
        }
    });
    if (cont===9) {
        alert("Bien hecho!!");
    }
}


var fichas_inicio  = {
    ficha1: "img1",
    ficha2: "img3",
    ficha3: "img4",
    ficha4: "img7",
    ficha5: "img6",
    ficha6: "img2",
    ficha7: "img5",
    ficha8: "img9",
    ficha9: "img8"
};

var fichas_final = {
    ficha1: "img1",
    ficha2: "img2",
    ficha3: "img3",
    ficha4: "img4",
    ficha5: "img5",
    ficha6: "img6",
    ficha7: "img7",
    ficha8: "img8",
    ficha9: "img9"
};