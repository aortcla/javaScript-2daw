const inBuscarSocio = document.getElementById("search-input");
const fechaHoy = document.getElementById("current-date");
const hora = document.getElementById("current-time");
const tablaSocios = document.getElementById("members-tbody");

fechaHoy.innerHTML = diaDeHoy();
setInterval(() => {hora.innerHTML = reloj();},1000);
tablaSocios.innerHTML = mostrarSocios(socios);
inBuscarSocio.addEventListener('input', buscarSocio);