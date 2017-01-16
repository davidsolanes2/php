

function Coche() {
	this.nombre;
	this.precio;
	this.Extra=[10];

	this.addExtra=function(extra) {
		this.Extra.push(extra);
		//console.log(this.Extra.length);
		return this.Extra.length;
		//this.numExtra=extra;
	};

	this.getExtra=function(numExtra) {
		return this.Extra[numExtra];
	}
}


var coche = new Coche();

coche.nombre="Fantastico";
coche.precio="70000€";

document.write('<br />Nombre Coche: ');
document.write(coche.nombre);
document.write('<br />Precio: ');
document.write(coche.precio);

var numExtra = coche.addExtra("Airbag");
var extra = coche.getExtra(numExtra-1);
document.write('<br />Extra: ');
document.write(extra);