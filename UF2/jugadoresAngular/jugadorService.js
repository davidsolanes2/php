/**
 * Created by david on 14/02/17.
 */

app.service ('serviceJugador' , function () {

    this.equipos = [];
   
    function Jugador(nick, nombre, fprincipal, puntos) {

        this.nick = nick;
        this.nombre = nombre;
        this.fprincipal = fprincipal;
        this.puntos = puntos;

    }
    
    function Equipo(nombre, victorias, derrotas, tjuego) {

            this.nombre = nombre;
            this.victorias = victorias;
            this.derrotas = derrotas;
            this.tjuego = tjuego;
    }
    
});