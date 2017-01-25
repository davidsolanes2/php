
/*function Coche() {
	this.nombre;
	this.precio;
	this.Extra=[10];

	this.addExtra=function(extra) {
		this.Extra.push(extra);
		return this.Extra.length;
	};

	this.getExtra=function(numExtra) {
		return this.Extra[numExtra];
	}
}*/

function Concesionario() {
	this.nombre;
	this.direccion;
	this.pedidos=[];


	this.addpedidos = function (coche) {
		this.pedidos.push(coche);
        return this.pedidos.length;
    };

    this.setNombre = function (nombre) {
		this.nombre = nombre;
    };

    this.setDireccion = function (direccion) {
        this.direccion = direccion;
    }

}

var extras = ["Techo Solar", "Camara Vision Central", "Conexion a Internet", "Control de Velocidad"];

function Coche() {
	this.nombre;
	this.precio;
	this.extras=[];

	this.addExtra = function (nombre_extra) {
		this.extras.push(nombre_extra);
		return this.extras.length-1;
    };
	this.getExtra = function (extra) {
		this.extras.length;
		return this.extras[extra];
    }
}



var coche = new Coche();
coche.nombre="Mustang";
coche.precio="70.000€";

var concesionario = new Concesionario();
concesionario.setNombre("Limousinas Solanes");
concesionario.setDireccion("Paseo Maragall, 123");

var numExtra = coche.addExtra("Airbag");
coche.addExtra(extras[2]);

var extra = coche.getExtra(numExtra-1);

var posicionPedido = concesionario.addpedidos(coche);

//num=Math.floor(Math.random()*3);

var coche1 = new Coche();
coche1.nombre = "Toyota Verso";
coche1.precio = "18.000 €";
coche1.addExtra(extras[(Math.floor(Math.random()*4))]);
concesionario.addpedidos(coche1);

var coche2 = new Coche();
coche2.nombre = "Peugot 5008";
coche2.precio = "18.000 €";
coche2.addExtra(extras[(Math.floor(Math.random()*4))]);
concesionario.addpedidos(coche2);

var coche3 = new Coche();
coche3.nombre = "Renault Megane";
coche3.precio = "17.500 €";
coche3.addExtra(extras[(Math.floor(Math.random()*4))]);
concesionario.addpedidos(coche3);

var coche4 = new Coche();
coche4.nombre = "Camaro";
coche4.precio = "87.500 €";
coche4.addExtra(extras[(Math.floor(Math.random()*4))]);
concesionario.addpedidos(coche4);


document.write('<table width="70%" border="1" cellpadding="5" cellspacing="1" bordercolor="#000000" align="center">');
    document.write('<tr bgcolor="#9596ff">');
    document.write('<th>Nombre Concesionario</th>');
    document.write('<th>Direccion</th>');
    document.write('</tr>');
    document.write('<td align="center">');
    document.write(concesionario.nombre);
    document.write('</td>');
    document.write('<td align="center">');
    document.write(concesionario.direccion);
    document.write('</td>');
	document.write('<table width="70%" border="1" cellpadding="5" cellspacing="10" bordercolor="#000000" align="center">');
		document.write('<tr bgcolor="#9596ff">');
		document.write('<th>Pedidos</th>');
		document.write('</tr>');
	document.write('</table>');
	document.write('<table width="70%" border="1" cellpadding="5" cellspacing="10" bordercolor="#000000" align="center">');
		document.write('<tr bgcolor="#9596ff">');
		document.write('<th>Posicion</th>');
		document.write('<th>Nombre</th>');
		document.write('<th>Precio</th>');
		document.write('<th>Extra</th>');
        document.write('</tr>');

		document.write('<tr align="center">');

				for (k = 0; k<concesionario.pedidos.length; k++) {
					document.write('<tr>');
                    	document.write('<td>');
                    		document.write(k+1);
                    	document.write('</td>');
                    	document.write('<td>');
							document.write(concesionario.pedidos[k].nombre);
						document.write('</td>');
						document.write("<td align='right'>");
							document.write(concesionario.pedidos[k].precio);
						document.write('</td>');
						document.write('<td>');
							document.write(concesionario.pedidos[k].extras);
						document.write('</td>');
					document.write('</tr>');
				}

		document.write('</tr>');
	document.write('</table>');
document.write('</table> ');
