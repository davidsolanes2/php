/**
 * Created by david on 1/03/17.
 */

window.onload=inicio;

    function inicio() {

        var addDiv = document.getElementById("addDiv");
        addDiv.addEventListener("click", addNewDiv, false);

        var addSpan = document.getElementById("addSpan");
        addSpan.addEventListener("click", addNewSpan, false);

        var addsetContentPrev = document.getElementById("setContentPrev");
        addsetContentPrev.addEventListener("click", addsetContentPrevF1, false);

        var adddelPrevNode = document.getElementById("delPrevNode");
        adddelPrevNode.addEventListener("click", adddelPrevNodeF1, false);

        var adddelNextNode = document.getElementById("delNextNode");
        adddelNextNode.addEventListener("click", adddelNextNodeF1, false);

        var addAttr = document.getElementById("addAttr");
        addAttr.addEventListener("click", addAttrF1, false);

        var adddelAllType = document.getElementById("delAllType");
        adddelAllType.addEventListener("click", adddelAllTypeF1, false);

        var addreplaceMeForFirst = document.getElementById("replaceMeForFirst");
        addreplaceMeForFirst.addEventListener("click", addreplaceMeForFirstF1, false);

        document.addEventListener("keydown", delFirstElem, false);

    }

    function addNewDiv() {
        var newDiv = document.createElement("DIV");
        newDiv.innerHTML= window.prompt("Introduce el texto del nuevo DIV");
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);

        newDiv.className="addDiv";
    }

    function addNewSpan() {
        var newSpan = document.createElement("SPAN");
        newSpan.innerHTML = window.prompt("Introduce el texto del nuevo SPAM");
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newSpan);
        newSpan.className="addSpan";
    }

    function addsetContentPrevF1() {
        var newDiv = document.createElement("DIV");
        newDiv.innerHTML = "setContentPrev";
        newDiv.className = "setContentPrev";
        newDiv.id = "newDiv";
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);

        newDiv.addEventListener("click", addNewsetContentPrevF2, false);
    }

    function addNewsetContentPrevF2(evt) {
        evt.target.previousElementSibling.innerHTML = window.prompt("Introduce el texto");

    }

    function adddelPrevNodeF1() {
        var newDiv = document.createElement("DIV");
        newDiv.innerHTML = "Remove Preview";
        newDiv.className = ".delPrevNode";
        newDiv.id = "newDiv";
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);

        newDiv.addEventListener("mouseover", adddelPrevNodeF2, false);

    }

    function adddelPrevNodeF2(evt) {
        var brother = evt.target.previousElementSibling;
        var parent = evt.target.parentNode;

        parent.removeChild(brother);
    }

    function adddelNextNodeF1() {
        var newDiv = document.createElement("DIV");
        newDiv.innerHTML = "Remove Next";
        newDiv.className = ".delNextNode";
        newDiv.id = "newDiv";
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);

        newDiv.addEventListener("click", adddelNextNodeF2, false);
    }

    function adddelNextNodeF2(evt) {
        var brother = evt.target.nextElementSibling;
        var parent = evt.target.parentNode;

        parent.removeChild(brother);
    }

    //2.6

    function addAttrF1() {
        var newDiv = document.createElement("DIV");
        newDiv.innerHTML = "Ad done Attr";
        newDiv.className = ".addAttr";
        newDiv.id = "newDiv";
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);

        newDiv.addEventListener("click", addAttrF2, false);
    }

    function addAttrF2(evt) {
        var atribute = window.prompt("Introduce un atributo");
        var valor = window.prompt("Introduce un valor");

        evt.target.setAttribute(atribute, valor);

    }

    //2.7

    function adddelAllTypeF1() {
        var newDiv = document.createElement("DIV");
        newDiv.innerHTML = "Delete All Of";
        newDiv.className = ".delAllType";
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);
        newDiv.addEventListener("click", adddelAllTypeF2, false);

    }
    
    function adddelAllTypeF2(evt) {
        var tipo = window.prompt("Introducir DIV/SPAN");
        var parent = evt.target.parentNode;
        var fills = parent.getElementsByTagName(tipo);

        for (var i = fills.length-1; i>=0; i--) {
            parent.removeChild(fills[i]);
        }

    }

    //2.8

    function addreplaceMeForFirstF1() {
        var newDiv = document.createElement("DIV");
        var name = window.prompt("Introduzca un dato");
        newDiv.innerHTML = name;
        newDiv.id = "primero";
        newDiv.className = ".replaceMeForFirst";
        newDiv.addEventListener("mouseover", mousePosicion, false);
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);
        newDiv.addEventListener("click", addreplaceMeForFirstF2, false);

    }

    function addreplaceMeForFirstF2() {
        var newDiv = document.getElementById("primero");
        var nodes = document.getElementById("domNodes");
        var primero = nodes.firstChild;
        nodes.insertBefore(newDiv, primero);
    }

    //2.9

    function mousePosicion(evt) {
        var mouseX = 0;
        var mouseY = 0;

        mouseX = evt.pageX;
        mouseY = evt.pageY;

        evt.target.innerHTML = mouseX + " , " + mouseY;
        return true;
    }


    //2.10 y 2.11


    function delFirstElem(event) {

        if (event.keyCode == '49') {
            //borrar primer elemeto de domNodes
            var domNodes = document.getElementById("domNodes");
            var primero = domNodes.firstElementChild;
            domNodes.removeChild(primero);

        }
        else if (event.keyCode == '50') {
            //borrar ultimo elemento de domNodes
            var domNodes = document.getElementById("domNodes");
            var ultimo = domNodes.lastElementChild;
            domNodes.removeChild(ultimo);
        }

    }
