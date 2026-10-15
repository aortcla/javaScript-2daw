const in1 = document.getElementById("in1");
const botonIntroducir = document.getElementById("botonIntroducir");
const botonMostrar = document.getElementById("botonMostrar");
const mostrar = document.getElementById("mostrar");

let lista = [];

botonIntroducir.onclick = introducir;
botonMostrar.onclick = muestra;


/************************** FUNCTIONS *********************************/

function introducir(){
    let valor = in1.value;
    lista.push(valor);
    in1.value = "";
}

function muestra(){
    lista.reverse();
    mostrar.innerHTML = lista;
}

