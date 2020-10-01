function Juego(){
    this.partidas = {};//! Que colección usamos?
    this.crearPartida=function(num,owner) {
        //* Generar código de 6 letras 
        //* Crear el objeto partida: num owner
        //! this.partidas[codigo] = nueva partida
        let codigo = this.obtenerCodigo();
        if(!this.partidas[codigo]){
            this.partidas[codigo] = new Partida(num, owner);
        }
    }

    this.unirAPartida=function(nick){

    }

    this.obtenerCodigo=function(){
        let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let letras = cadena.split('');
        let codigo = [];
        for(i = 0; i<6;i++){
            codigo.push(letras[randomInt(0,25)-1]);
        }
        return codigo.join('');
    }
}

function Partida(num,owner){
    this.numUsuarios = num;
    this.owner = owner;
    this.usuarios = [];//* El index 0 será el owner
    //* this.usuarios = {}; //! Versión array asociativo o diccionario
    this.agregarUsuario=function(nick){
        //Comprobar nick único
        //Comprobar si es el usuario num(máximo)
    }
    this.agregarUsuario(owner);
}

function randomInt(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}
