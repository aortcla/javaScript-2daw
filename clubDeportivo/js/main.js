const inBuscarSocio = document.getElementById("search-input");
const fechaHoy = document.getElementById("current-date");
const hora = document.getElementById("current-time");
const tablaSocios = document.getElementById("members-tbody");
const actividades = document.getElementById("activity-filter");

fechaHoy.innerHTML = diaDeHoy();
setInterval(() => {hora.innerHTML = reloj();},1000);
tablaSocios.innerHTML = mostrarSocios(socios);
inBuscarSocio.addEventListener('input', filtroFinal);
