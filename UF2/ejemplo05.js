/**
 * Created by david on 7/12/16.
 */


var usuarios = new Array();

var usu = new Array();

usu ["nombre"] = "Juan";
usu ["apellido"] = "Gavilan";
usu.edad = 33;

usu["estudios"] = [];

usuarios[1] = usu;

var usuario = [{nombre: "David", apellido: "Solanes", edad:33, estudios:["Superiores"]}];

var usuario=usuarios[1];
document.write('<br />Nombre Usuario: ');
document.write(usuarios.nombre);
document.write('<br />Apellido : ');
document.write(usuarios.apellido);
document.write('<br/>Edad : ');
//usuarios.estudios.push("mecanica“);

var estudio1 = usuarios.estudios[0];
document.write('<br />Estudio1: ');
document.write(estudio1);