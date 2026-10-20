const mostrar = document.getElementById("mostrar");
const calendario = document.getElementById("calendario");

let myDate = new Date(2005, 8, 27);
let dateNow = new Date();

calendario.oninput = function(){
    mostrar.textContent = "Desde la fecha seleccionada y tu nacimiento han pasado: "+ 
    (new Date(this.value) - myDate) / (1000*60*60*24) + " dias";
}

