function Juego() {
  this.partidas = {}; //! Que colección usamos?
  this.crearPartida = function (num, owner) {
    let codigo = this.obtenerCodigo();
    if (!this.partidas[codigo]) {
      this.partidas[codigo] = new Partida(num, owner);
    }
  };

  this.unirAPartida = function (codigo, nick) {
    if (this.partidas[codigo] && this.faltan(codigo)) {
      this.partidas[codigo].agregarUsuario(nick);
    }
  };

  this.faltan = function (codigo) {
    return Object.keys(juego.partidas[codigo].usuarios).length;
  };

  this.obtenerCodigo = function () {
    let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letras = cadena.split("");
    let maxCadena = cadena.length;
    let codigo = [];
    for (i = 0; i < 6; i++) {
      codigo.push(letras[randomInt(1, maxCadena) - 1]);
    }
    return codigo.join("");
  };
}

function Partida(num, owner) {
  this.max = num;
  this.nickOwner = owner;
  this.usuarios = []; //* El index 0 será el owner
  //* this.usuarios = {}; //! Versión array asociativo o diccionario
  this.agregarUsuario=function(nick){
      this.fase.agregarUsuario(nick);
  }
  this.agregarUsuario = function (nick) {
    let nuevo = nick;
    let contador = 1;
    while (this.usuarios[nuevo]) {
      nuevo = nick + contador;
      contador = contador + 1;
    }
    this.usuarios[nuevo] = new Usuario(nuevo);
  };
  this.agregarUsuario(owner);
}

function Inicial() {
    this.agregarUsuario=function(nick,partida){
        partida.puedeAgregarUsuario(nick);
    }
}
function Jugando() {
    this.agregarUsuario=function(nick,partida){
        //this.puedeAgregar(nick);
    }
}
function Final() {
    this.agregarUsuario=function(nick,partida){
        //this.puedeAgregar(nick);
    }
}

function Usuario(nick) {
  this.nick = nick;
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
