/**
 * Funcion que devuelve la fecha de hoy en un formato especifico
 */
function diaDeHoy(){
    let cadena = "";
    let fecha = new Date();

    switch (fecha.getDay()) {
        case 1:
            cadena += "Lunes"
            break;
        case 2:
            cadena += "Martes"
            break;
        case 3:
            cadena += "Miércoles"
            break;
        case 4:
            cadena += "Jueves"
            break;
        case 5:
            cadena += "Viernes"
            break;
        case 6:
            cadena += "Sábado"
            break;
        case 0:
            cadena += "Domingo"
            break;
    }

    cadena += ", "+fecha.getDate()+" de "

    switch (fecha.getMonth()) {
        case 0:
            cadena += "Enero"
            break;
        case 1:
            cadena += "Febrero"
            break;
        case 2:
            cadena += "Marzo"
            break;
        case 3:
            cadena += "Abril"
            break;
        case 4:
            cadena += "Mayo"
            break;
        case 5:
            cadena += "Junio"
            break;
        case 6:
            cadena += "Julio"
            break;
        case 7:
            cadena += "Agosto"
            break;
        case 8:
            cadena += "Septiembre"
            break;
        case 9:
            cadena += "Octubre"
            break;
        case 10:
            cadena += "Noviembre"
            break;
        case 11:
            cadena += "Diciembre"
            break;
    }

    cadena+= " de "+fecha.getFullYear();

    return cadena;
}
/**
 * funcion que muestra la hora actual en pantalla
 */
function reloj(){
    let final = new Date();

    return final.toLocaleTimeString();
}

/**
 * Funcion que calcula la edad de un socio
 */
function edad(fechaNacimiento){

    let parseoFechaNacimiento = new Date(fechaNacimiento);
    let fechaHoy = new Date();

    let años = fechaHoy.getFullYear() - parseoFechaNacimiento.getFullYear();

    return años;

}

/**
 * Funcion que rellena la taba del index con el array de socios de data
 */
function mostrarSocios(lista = []){
    let cadena = "";


    for (const elem of lista) {
        let iniciales = elem.nombre.charAt(0) + elem.apellidos.charAt(0);

        let actividades = "";

        for (const act of elem.actividades) {
            actividades += `<span class="badge">${act}</span>`;
        }

        let apellidosSeparados = elem.apellidos.split(" ");
        let formatoNombre = elem.nombre +" "+ apellidosSeparados[0]+" "+ apellidosSeparados[1].charAt(0)+".";

        //intento de censurar el correo
        /* let reCorreo = /^.{2}.[^@]$/;

        let censura = elem.email.match(reCorreo); */


        cadena += `<tr>
                        <td>
                            <div class="user-id-cell">
                                <span class="avatar-circle">${iniciales}</span>
                                <span class="id-text">${elem.id}</span>
                            </div>
                        </td>
                        <td>
                            ${formatoNombre}
                        </td>
                        <td>
                            ${elem.email}
                        </td>
                        <td>
                            ${actividades}
                        </td>
                        <td>
                            ${edad(elem.fechaNacimiento)}
                        </td>
                        <td>
                            ${elem.cuota.toFixed(2)}€
                        </td>
                    </tr>`;
    }

    return cadena;
}

/**
 * Metodo que cambia las tildes por su correspondiente sin tilde
 * @param {string} texto 
 * @returns 
 */
function sinTildes(texto){

    if(/[áÁ]/.test(texto)){
        texto = texto.replace(/[áÁ]/gi, "a");
    }

    if(/[éÉ]/.test(texto)){
        texto = texto.replace(/[éÉ]/gi, "e");
    }

    if(/[íÍ]/.test(texto)){
        texto = texto.replace(/[íÍ]/gi, "i");
    }

    if(/[óÓ]/.test(texto)){
        texto = texto.replace(/[óÓ]/gi, "o");
    }

    if(/[úÚ]/.test(texto)){
        texto = texto.replace(/[úÚ]/gi, "u");
    }

    return texto;
}

function filtroFinal(){
    let cadena =  sinTildes(inBuscarSocio.value.toLowerCase().trim());
    let actividadSeleccionada = sinTildes(actividades.value.toLowerCase());
    let nuevoArray = [];
    let cadenaActividades = "";
    let orden = sinTildes(ordenSeleccionado.value);

    for (const elem of listaSociosActuales) {
        cadenaActividades = "";
        for (const actividadesSocios of elem.actividades) {
            cadenaActividades += actividadesSocios; 
        }
        
        cadenaActividades = sinTildes(cadenaActividades);

        if(cadena.length <= 2){
            if(actividadSeleccionada == "todos"){
                nuevoArray.push(elem);
            }else if(cadenaActividades.includes(actividadSeleccionada)){
                nuevoArray.push(elem);
            }
        }else{
            if((sinTildes(elem.nombre.toLowerCase()).includes(cadena) ||
                    sinTildes(elem.apellidos.toLowerCase()).includes(cadena) ||
                    sinTildes(elem.email.toLowerCase()).includes(cadena))
                     && (actividadSeleccionada == "todos")){
                
                        nuevoArray.push(elem);

            }else if((sinTildes(elem.nombre.toLowerCase()).includes(cadena) ||
                    sinTildes(elem.apellidos.toLowerCase()).includes(cadena) ||
                    sinTildes(elem.email.toLowerCase()).includes(cadena))
                     && (cadenaActividades.includes(actividadSeleccionada))){

                        nuevoArray.push(elem);
                     }

        }
    }

    nuevoArray.sort((a, b) => {
        if (orden === "nombre") {
            if (a.nombre > b.nombre) return 1;
            if (a.nombre < b.nombre) return -1;
            return 0;
        } else if (orden === "apellidos") {
            if (a.apellidos > b.apellidos) return 1;
            if (a.apellidos < b.apellidos) return -1;
            return 0;
        } else if (orden === "jovenes") {
            return new Date(b.fechaNacimiento) - new Date(a.fechaNacimiento);
        } else if (orden === "antiguos") {
            return new Date(a.fechaAlta) - new Date(b.fechaAlta);
        }
        return 0;
    });

    if(nuevoArray.length == 0){
        tablaSocios.innerHTML = "<p style=color:red>No se han encontrado socios</p>";
    }else{
        tablaSocios.innerHTML = mostrarSocios(nuevoArray);
    }
        
}

function pantallaCompleta(){
    if(!document.fullscreenElement){
        seccionPantallaCompleta.requestFullscreen();
    }else{
        document.exitFullscreen();
    }


}

function buscaSocioDNI(dni){
    let soc = null;

    for (const elem of listaSociosActuales) {
        if(elem.dni.toLocaleLowerCase().trim() === dni.toLocaleLowerCase().trim())
            soc = elem;
    }

    return soc;
}


function obtenerFechaNacimientoYEdad(fechaNacimiento) {
    let fechaNac = new Date(fechaNacimiento);
    let hoy = new Date();

    let años = hoy.getFullYear() - fechaNac.getFullYear();
    let mesActual = hoy.getMonth() - fechaNac.getMonth();
    if (mesActual < 0 || (mesActual === 0 && hoy.getDate() < fechaNac.getDate())) {
        años--;
    }

    let cadena = "";

    switch (fechaNac.getDay()) {
        case 1: cadena += "Lunes"; break;
        case 2: cadena += "Martes"; break;
        case 3: cadena += "Miércoles"; break;
        case 4: cadena += "Jueves"; break;
        case 5: cadena += "Viernes"; break;
        case 6: cadena += "Sábado"; break;
        case 0: cadena += "Domingo"; break;
    }

    cadena += ", " + fechaNac.getDate() + " de ";

    switch (fechaNac.getMonth()) {
        case 0: cadena += "enero"; break;
        case 1: cadena += "febrero"; break;
        case 2: cadena += "marzo"; break;
        case 3: cadena += "abril"; break;
        case 4: cadena += "mayo"; break;
        case 5: cadena += "junio"; break;
        case 6: cadena += "julio"; break;
        case 7: cadena += "agosto"; break;
        case 8: cadena += "septiembre"; break;
        case 9: cadena += "octubre"; break;
        case 10: cadena += "noviembre"; break;
        case 11: cadena += "diciembre"; break;
    }

    cadena += " de " + fechaNac.getFullYear() + " (" + años + " años)";

    return cadena;
}


function formatoAltaSocio(fechaAltaStr) {
    let fechaAlta = new Date(fechaAltaStr);
    let hoy = new Date();

    let dia = fechaAlta.getDate();
    let mes = fechaAlta.getMonth() + 1;
    let anio = fechaAlta.getFullYear();

    if (dia < 10) {
        dia = "0" + dia;
    }

    if (mes < 10) {
        mes = "0" + mes;
    }
    
    let cadena = dia + "/" + mes + "/" + anio;

    let diferenciaMilisegundos = hoy - fechaAlta;
    let diasTotales = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    return cadena + " (" + diasTotales + " días en el club)";
}

function diasParaCumpleaños(fechaNacimiento){
    let fechaNac = new Date(fechaNacimiento);
    let hoy = new Date();

    let proximoCumple = new Date(hoy.getFullYear(), fechaNac.getMonth(), fechaNac.getDate());

    if (proximoCumple < hoy) {
        proximoCumple.setFullYear(hoy.getFullYear() + 1);
    }

    let diferenciaMilisegundos = proximoCumple - hoy;
    let diasRestantes = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    return diasRestantes;
}

function actividadesYCuouta(act, cuota){
    let cadena = "";

    for (let i = 0; i < act.length; i++) {
        if(i == act.length - 1){
            cadena += act[i];
        }else{
            cadena += act[i]+", ";
        }
    }

    cadena += ". Cuota de: " + cuota + "€";

    return cadena;
}

function fichaSocio(){
    let dni = inDNI.value;
    let socio = buscaSocioDNI(dni);

   

    if(socio){

        infoSocio.style = "color:black";

        let telefonoFormateado = socio.telefono.substring(0,3)+" "+
                                socio.telefono.substring(3,6)+" "+
                                socio.telefono.substring(6,9);

        let fechaNacFormateada = obtenerFechaNacimientoYEdad(socio.fechaNacimiento);

        let fechaAltaFormateada = formatoAltaSocio(socio.fechaAlta);

        let diasCumpleaños = diasParaCumpleaños(socio.fechaNacimiento);

        let actYCuota = actividadesYCuouta(socio.actividades, socio.cuota);

        infoSocio.innerHTML = "<br>Nombre: "+socio.nombre +" "+socio.apellidos+"<br>"+
                                "DNI: "+socio.dni+"<br>"+
                                "Email: "+socio.email+"<br>"+
                                "Telefono: "+telefonoFormateado+"<br>"+
                                "Fecha de Nacimiento: "+fechaNacFormateada+"<br>"+
                                "Fecha de alta: "+fechaAltaFormateada+"<br>"+
                                "Días para su proximo cumpleaños: "+diasCumpleaños+"<br>"+
                                "Actividades: "+actYCuota;

    }else{
        infoSocio.style = "color:red";
        infoSocio.innerHTML = "Error no existe un socio con ese DNI";
    }
}
