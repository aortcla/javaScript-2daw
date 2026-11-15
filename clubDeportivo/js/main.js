const inBuscarSocio = document.getElementById("search-input");
const fechaHoy = document.getElementById("current-date");
const hora = document.getElementById("current-time");
const tablaSocios = document.getElementById("members-tbody");
const actividades = document.getElementById("activity-filter");
const ordenSeleccionado = document.getElementById("sort-select");
const btPantallaCompleta = document.getElementById("btn-fullscreen");
const seccionPantallaCompleta = document.getElementById("members-section");
const inDNI = document.getElementById("dni-search-input");
const btBuscarDNI = document.getElementById("btn-search-dni");
const infoSocio = document.getElementById("info-socio");

fechaHoy.innerHTML = diaDeHoy();
setInterval(() => {hora.innerHTML = reloj();},1000);
tablaSocios.innerHTML = mostrarSocios(socios);
inBuscarSocio.addEventListener('input', filtroFinal);
actividades.addEventListener('change', filtroFinal);
ordenSeleccionado.addEventListener('change', filtroFinal);

btPantallaCompleta.addEventListener('click', pantallaCompleta);

btBuscarDNI.addEventListener('click', fichaSocio);