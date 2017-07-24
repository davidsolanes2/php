/**
 * Created by david on 24/04/17.
 */

window.onload=inicio;

function inicio() {
    var addUl = document.getElementById("addUl");
    addUl.addEventListener("click", addNewUl, false);

    var addLi = document.getElementById("addLi");
    addLi.addEventListener("click", addLi, false);

    var addsetContentPrev = document.getElemntById("setPrevNode");
    addsetContentPrev.addEventListener("click", addsetContentPrevF1, false);

}

function addNewUL() {
    var newUL = document.createElement("UL");
    newUL.innerHTML = "setContentPrev";
    newUL.id= "newUL";

}




/*
*
* MIRAR WINDOW.OPENER.-nombre de la funcion(); -> para llamar una funcion desde otra pagina

 see:

 Number.Max_SAFE_INTEGER
 Number.MIN_SAFE_INTEGER

 print the value :


 <button onclick=”Max()”>Numero Máximo</button>
 <button onclick=”Min()”>Numero Minimo</button>
 <button onclick=”HP()”>Altura de Pantalla</button>
 <button onclick=”WP()”>Ancho de Pantalla</button>
 <button onclick=”HW()”>Altura de la Web</button>
 <button onclick=”WW()”>Ancho de la Web</button>
 <button onclick=”URL()”>URL de la Web</button>
 <button onclick=”Domain()”>Domain de la pagina</button>


 <p id=”maximo”></p>
 <p id=”minimo”></p>
 <p id=”altoPantalla”></p>
 <p id=”anchoPantalla”></p>
 <p>id=”altoWeb”</p>
 <p>id=”anchoWeb”</p>
 <p>id=”urlweb”</p>
 <p id=”dominio”></p>

 <script>
 function Max() {
 document.getElementById(“maximo”).innerHTML = Number.MAX_VALUE;
 }
 function Min() {
 document.getElementById(“minimo”).innerHTML = Number.MIN_VALUE;
 }
 function HP() {
 var a = document.screen.height;
 document.getElementById(“altoPantalla”).innerHTML= a;
 }



 function WP() {
 var b  = document.screen.width;
 document.getElementById(“anchoPantalla”).innerHTML= b;
 }
 function HW() {
 var c = document.body.scrollHeight;
 document.getElementById(“altoWeb”).innerHTML=c;
 }
 function WW() {
 var d = document.body.scrollWidth;
 document.getElementById(“anchoWeb”).innerHTML=d;
 }
 function URL() {
 var e = document.URL;
 document.getElementById(“urlweb”).innerHTML=e
 }
 function Domain() {
 var y = document.domain;
 document.getElementById(“dominio”).innerHTML = y;
 }

 </script>

 *
* */