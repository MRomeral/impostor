function Juego() {
  this.partidas = {}; //! Que colección usamos?
  this.crearPartida = function (num, owner) {
    let codigo = this.obtenerCodigo();
    if (!this.partidas[codigo]) {
      this.partidas[codigo] = new Partida(num, owner);
      owner.partida=this.partidas[codigo];
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
  this.fase = new Inicial();
  this.usuarios = {}; //! Versión array asociativo o diccionario
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
    if (Object.keys(this.usuarios).length>=this.maximo){
			this.fase=new Jugando();
		}
  };
  this.iniciarPartida=function () {
    this.fase.iniciarPartida(this);
  }
  this.agregarUsuario(owner);
}

function Inicial() {
    this.agregarUsuario=function(nick,partida){
        partida.puedeAgregarUsuario(nick);
    }
    this.iniciarPartida=function(partida){
      console.log("Faltan jugadores");
    }
}

function Completado(){
  this.iniciarPartida=function(partida){
    partida.fase=new Jugando();
  }
  this.agregarUsuario=function(nick,partida){
		console.log("La partida ya ha comenzado");
	}
}

function Jugando() {
    this.agregarUsuario=function(nick,partida){
        console.log("La partida ya ha comenzado!");
    }
    this.iniciarPartida=function(partida){
      
    }
}
function Final() {
    this.agregarUsuario=function(nick,partida){
      console.log("La partida ha terminado!");
    }
    this.iniciarPartida=function(partida){
      
    }
}

function Usuario(nick) {
  this.nick = nick;
  this.juego = juego;
  this.partida;
  this.crearPartida=function(num){
    this.juego.crearPartida(num,this);
  }
  this.iniciarPartida=function(){
    this.partida.iniciarPartida();
  }
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
