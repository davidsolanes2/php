
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

	this.getpedidos=function (numpedidos) {
		return this.pedidos(numpedidos);
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

concesionario.addpedidos(coche.nombre="Toyota Verso");
concesionario.addpedidos(coche.precio="18.000€");

concesionario.addpedidos(coche.nombre="Peugot 5008");
concesionario.addpedidos(coche.precio="18.000€");

//concesionario.addpedidos(coche.nombre="Toyota Verso");

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
		document.write('<td align="center">');
			document.write(posicionPedido);
		document.write('</td>');
        document.write('<td align="center">');
			for(k=0; k<concesionario.pedidos.length; k++) {
                document.write(concesionario.pedidos[k]);
			}
		document.write('</td>');
        document.write('<td align="right">');
            document.write(coche.precio);
        document.write('</td>');
        document.write('<td>');
			for(i=0; i<coche.extras.length;i++) {
                document.write('- '+ coche.extras[i] + '</br>');
			}
        document.write('</td>');
	document.write('</table>');
document.write('</table> ');
