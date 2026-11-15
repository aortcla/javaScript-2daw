var userWindow = null;

let listaSociosActuales = recorreSocios();

const errorInsercion = document.getElementById("errorInsercion");
const nombreNuevoSocio = document.getElementById("reg-nombre");
const dniNuevoSocio = document.getElementById("reg-dni");
const inApellidos = document.getElementById("reg-apellidos");
const inEmail = document.getElementById("reg-email");
const inTel = document.getElementById("reg-telefono");
const inFechaNac = document.getElementById("reg-fnacimiento");


function abreVentana(){
    if(!userWindow || userWindow.closed){
        userWindow = window.open("./html/alta.html", "_blank", "width=600,height=900,top=200");
    }
}

/*devuelve el array de los socios*/
function recorreSocios(){
    let arraySocios = [];

    for (const elem of socios) {
        arraySocios.push(elem);
    }

    return arraySocios;
}

/**
 * funcion que devuelve el ultimo id 
 */
function nuevoID(){
    
    let ultimoId = listaSociosActuales[listaSociosActuales.length -1].id;

    let numero = parseInt(ultimoId.substring(4)) + 1;

    let nuevoIdFormateado = "";

    if (numero < 10) {
        nuevoIdFormateado = "SOC-00" + numero;
    } else if (numero < 100) {
        nuevoIdFormateado = "SOC-0" + numero;
    } else {
        nuevoIdFormateado = "SOC-" + numero;
    }

    return nuevoIdFormateado;
}

/**
 * devuelve true o false segun si el dni es valido o no
 * @returns boolean
 */
function validacionDNI(){
    const re_dni = /^\d{8}[A-Z]$/;

    let dniValido = true;

    if(!re_dni.test(dniNuevoSocio)){
        dniValido = false;
    }

    for (const elem of listaSociosActuales) {
        if(dniNuevoSocio.value === elem.dni){
            dniValido = false;
        }
    }

    let numero = parseInt(dni.substring(0, 8));
    let letraUsuario = dni.substring(8, 9).toUpperCase();

    let letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resto = numero % 23;
    let letraCorrecta = letrasValidas.charAt(resto);

    if(letraUsuario !== letraCorrecta){
        dniValido = false;
    }

    return dniValido;

}


function validaApellidos(){
    const re_apellidos = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+ [a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/;

    if(re_apellidos.test(inApellidos.value)){
        return true;
    }else{
        return false;
    }
}

function validacionEmail(){
    const re_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(re_email.test(inEmail.value)){
        return true;
    }else{
        return false;
    }

}

function validacionTelefono(){
    const re_tel = /^[6789](\s*\d){8}$/;

    if(re_tel.test(inTel.value)){
        return true;
    }else{
        return false;
    }
}

function validacionFechaNacimiento(){
    let fechaValida = true;
    let fechaStr = inFechaNac.value;

    const re_formato = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = fechaStr.match(re_formato);
    
    if (!match) {
        fechaValida = false;
    } else {
        let dia = parseInt(match[1], 10);
        let mes = parseInt(match[2], 10) - 1;
        let anio = parseInt(match[3], 10);

        let fechaNacimiento = new Date(anio, mes, dia);
        if (
            fechaNacimiento.getFullYear() !== anio ||
            fechaNacimiento.getMonth() !== mes ||
            fechaNacimiento.getDate() !== dia
        ) {
            fechaValida = false;
        } else {
            
            let hoy = new Date();

            if (fechaNacimiento > hoy) {
                fechaValida = false;
            } else {
                let edad = hoy.getFullYear() - anio;
                let mesActual = hoy.getMonth() - mes;
                
                if (mesActual < 0 || (mesActual === 0 && hoy.getDate() < dia)) {
                    edad--;
                }

                if (edad < 14) {
                    fechaValida = false;
                }
            }
        }
    }

    return fechaValida;
}


function insertarSocio(){
    let cadenaErrores = "";
    let socioValido = true;
    let socioNuevo = null;
    
    /*Expresion regular para nombres*/
    const re_nombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)*$/;
    if(!re_nombre.test(nombreNuevoSocio.value)){
        cadenaErrores += "Nombre no válido<br>";
        socioValido = false;
    }

    //comprobacion de dni
    if(!validacionDNI()){
        cadenaErrores += "DNI no válido<br>";
        socioValido = false;
    }

    //comprobacion de apellidos
    if(!validaApellidos()){
        cadenaErrores += "Apellidos no válidos<br>";
        socioValido = false;
    }

    //comprobacion email
    if(!validacionEmail()){
        cadenaErrores += "Email no valido<br>";
        socioValido = false;
    }

    //comprobacion telefono
    if(!validacionTelefono()){
        cadenaErrores += "Telefono no valido<br>";
        socioValido = false;
    }

    //comprobacion de fecha de nacimiento
    if(!validacionFechaNacimiento()){
        cadenaErrores += "Fecha de nacimiento no válida<br>";
        socioValido = false;
    }

    if(socioValido){
        socioNuevo = {
            id: nuevoID(),
            nombre: nombreNuevoSocio.value,
            apellidos: "Gomez Lopez",
            dni: "25619590M",
            email: "natalia.gomez@gmail.es",
            telefono: "640156383",
            fechaNacimiento: "2005-03-23",
            fechaAlta: "2023-07-02",
            actividades: ["natación", "yoga"],
            cuota: 40
        }
        listaSociosActuales.push(socioNuevo);
    }else{
        errorInsercion.innerHTML = cadenaErrores;
    }

    return listaSociosActuales;

}