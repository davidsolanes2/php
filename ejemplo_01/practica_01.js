/**
 * Created by dsg on 20/09/16.
 */


function prueba_01() {
    var vidasRestantes = 3;
    var numero;

    do {
        numero= window.prompt("introdueixi numero");

    } while (isNaN(numero) || numero == null)

    numero = parseInt(numero);

    var resultat;
    resultat = numero + vidasRestantes;

    alert("Vides Restants:"+resultat);
    console.log("El numero introduit es"+numero);
}

function obtenValorTexto() {
    var texto = document.getElementById("texto").value;
    document.getElementById("valor_texto").innerHTML=texto;


    /*  var input = document.getElemtById
        var texto ? input.value


    */


}

