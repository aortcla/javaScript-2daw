const fechaHoy = document.getElementById("current-date");
const hora = document.getElementById("current-time");
const tablaSocios = document.getElementById("members-tbody");

fechaHoy.innerHTML = diaDeHoy();
setInterval(() => {reloj();},1000);
tablaSocios.innerHTML+= mostrarSocios();