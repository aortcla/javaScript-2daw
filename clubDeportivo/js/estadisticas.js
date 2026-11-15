var ventanaStats = null;

let listaStats = null;

if(window.opener){
    listaStats = window.opener.listaPrincipal;
}

function abreVentanaStats(){
    if(!ventanaStats || ventanaStats.closed){
        ventanaStats = window.open("./html/estadistica.html", "_blank", "width=600,height=900,top=200");
    }
}

function datos(){
    let cadena = "";
    let numSocios = 0;
    let ingresosTotales = 0;
    let cuotaMedia = 0;
    let hayMenores = false;
    let todosConActividad = true;

    for (const elem of listaStats) {
        numSocios++;
        ingresosTotales += elem.cuota;

        if(elem.actividades.length === 0){
            todosConActividad = false;
        }
    }

    cuotaMedia = ingresosTotales / numSocios;

    cadena = "Numero de socios: " + numSocios + "<br>" +
            "Ingresos mensuales: " + ingresosTotales.toFixed(2) + "€<br>" +
            "Cuota media: " + cuotaMedia.toFixed(2) + "€<br>" +
            "Hay socios menores de edad: " + (hayMenores ? "Sí" : "No") + "<br>" +
            "Todos los socios tienen actividad: " + (todosConActividad ? "Sí" : "No") + "<br>";

    return cadena;
}

const estadisticas = document.getElementById("stat-total");

if(estadisticas && listaStats){
    estadisticas.innerHTML = datos();
}