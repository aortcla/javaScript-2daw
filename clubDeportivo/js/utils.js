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

    hora.innerHTML = final.toLocaleTimeString();
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
function mostrarSocios(){
    let cadena = "";


    for (const elem of socios) {
        let iniciales = elem.nombre.charAt(0) + elem.apellidos.charAt(0);

        let actividades = "";

        for (const act of elem.actividades) {
            actividades += `<span class="badge">${act}</span>`;
        }

        let apellidosSeparados = elem.apellidos.split(" ");
        let formatoNombre = elem.nombre +" "+ apellidosSeparados[0]+" "+ apellidosSeparados[1].charAt(0)+".";

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