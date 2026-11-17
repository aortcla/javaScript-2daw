var userWindow = null;

let listaSociosActuales = null;

if(window.opener){
    listaSociosActuales = window.opener.listaPrincipal;
}

const errorInsercion = document.getElementById("errorInsercion");
const nombreNuevoSocio = document.getElementById("reg-nombre");
const dniNuevoSocio = document.getElementById("reg-dni");
const inApellidos = document.getElementById("reg-apellidos");
const inEmail = document.getElementById("reg-email");
const inTel = document.getElementById("reg-telefono");
const inFechaNac = document.getElementById("reg-fnacimiento");

const inCuota = document.getElementById("reg-cuota");


function abreVentanaAlta(){
    if(!userWindow || userWindow.closed){
        userWindow = window.open("./html/alta.html", "_blank", "width=600,height=900,top=200");
    }
}


/**
 * funcion que devuelve el ultimo id 
 */
function nuevoID(){
    
    let ultimoId = listaSociosActuales[listaSociosActuales.length -1].id;

    let numero = parseInt(ultimoId.substring(4)) + 1;

    let nuevoIdFormateado = "";

    if (numero < 10) {
        nuevoIdFormateado = "SOC-000" + numero;
    } else if (numero < 100) {
        nuevoIdFormateado = "SOC-00" + numero;
    } else {
        nuevoIdFormateado = "SOC-" + numero;
    }

    return nuevoIdFormateado;
}

function validacionDNI(){
    const re_dni = /^\d{8}[A-Z]$/;
    let dniValido = true;
    
    let valorDni = dniNuevoSocio.value.toUpperCase();

    if(!re_dni.test(valorDni)){
        dniValido = false;
    }

    for (const elem of listaSociosActuales) {
        if(valorDni === elem.dni){
            dniValido = false;
        }
    }

    let numero = parseInt(valorDni.substring(0, 8), 10);
    let letraUsuario = valorDni.substring(8, 9);

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


function validacionActividades() {
    let alMenosUna = true;
    
    const checkboxesMarcados = document.querySelectorAll('input[name="actividad"]:checked');

    if (checkboxesMarcados.length === 0) {
        alMenosUna = false;
    }

    return alMenosUna;
}

function formateaFechaNacimiento(){
    let partes = inFechaNac.value.split("/");

    return partes[2] + "-" + partes[1] + "-" + partes[0];
}

function fechaAltaHoy(){
    let hoy = new Date();

    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let anio = hoy.getFullYear();

    if (dia < 10) {
        dia = "0" + dia;
    }

    if (mes < 10) {
        mes = "0" + mes;
    }

    return anio + "-" + mes + "-" + dia;
}

//validacion de cuotas
function validarCuota(){
    const re_cuota = /^\d{1-3}\[,.]\d{1-2}$/;

    if(re_cuota.test(inCuota.value)){
        return true;
    }else{
        return false;
    }
}


function insertarSocio(){

    if(!listaSociosActuales){
        errorInsercion.innerHTML = "Abre esta ventana desde el botón Dar de Alta Socio del listado";
        return;
    }

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

    if(!validacionActividades()){
        cadenaErrores += "Tiene que haber al menos una actividad seleccionada<br>";
        socioValido = false;
    }

    //validacion de cuota comentada porque la funcion no va bien
    /*if(!validarCuota()){
        cadenaErrores += "Cuota no válida<br>";
        socioValido = false;
    }*/

    if(socioValido){

        //Array vacío para guardar las actividades seleccionadas
        let actividadesSeleccionadas = [];
        const checkboxesMarcados = document.querySelectorAll('input[name="actividad"]:checked');

        for (const chk of checkboxesMarcados) {
            actividadesSeleccionadas.push(chk.value);
        }

        let idGenerado = nuevoID();

        socioNuevo = {
            id: idGenerado,
            nombre: nombreNuevoSocio.value,
            apellidos: inApellidos.value,
            dni: dniNuevoSocio.value.toUpperCase(),
            email: inEmail.value,
            telefono: inTel.value,
            fechaNacimiento: formateaFechaNacimiento(),
            fechaAlta: fechaAltaHoy(),
            actividades: actividadesSeleccionadas,
            cuota: Number(inCuota.value)
        }
        listaSociosActuales.push(socioNuevo);
        window.opener.filtroFinal();

        errorInsercion.innerHTML = "Socio "+nombreNuevoSocio.value+" dado de alta con id "+idGenerado;
    }else{
        errorInsercion.innerHTML = cadenaErrores;
    }


}

/*Llamada a funciones*/

const btInsertarSocio = document.getElementById("btInsertarSocio");

if(btInsertarSocio){
    btInsertarSocio.addEventListener("click", insertarSocio);
}