export {saludar, edad}

function saludar (nombre){
    return `${iniciaSaludo()}  ${nombre}`;
}

var edad = 30;

function iniciaSaludo (){
    let dateNow = new Date();
    let result = "";

    if(dateNow.getHours() <= 12){
        result = "Buenos días";
    }else{
        result = "Buenas tardes";
    }

    return result;
}

export var password = "njdkalhuls789!!";

export default function muestraPassword(){
    return password;
}

export class Usuario {
        constructor(nombre = "Anónimo", apellidos = "", password = "1234"){
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.password = "sdfjnsduop??";
        }
}