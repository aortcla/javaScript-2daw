const in_euros = document.getElementById("in_euros");
const botonDolares = document.getElementById("botonDolares");
const botonYenes = document.getElementById("botonYenes");
const textoMain = document.getElementById("p_mostrar");

const CONVERSION_DOLARES = 1.125;
const CONVERSION_YENES = 1776.69;

botonDolares.onclick = deEurosaDolares;
botonYenes.onclick = deEurosaYenes;

/******************** FUNCTIONS ************************/
function deEurosaDolares(){
    let euros = leeInputEuros();

    if(!isNaN(euros)){
        let dolares = euros * CONVERSION_DOLARES;

        textoMain.innerHTML = euros+"€ en dolares son : "+dolares+"$";
        limpiar();
    }else{
        textoMain.style.color = "red";
        textoMain.innerHTML = "El valor no es numerico!!";
    }
}

function deEurosaYenes(){
    let euros = leeInputEuros();
    
    if(!isNaN(euros)){
        let yenes = euros * CONVERSION_YENES;

        textoMain.innerHTML = euros+"€ en Yenes son : "+yenes;
        limpiar();
    }else{
        textoMain.style.color = "red";
        textoMain.innerHTML = "El valor no es numerico!!";
    }
}

function leeInputEuros(){
    return parseFloat(in_euros.value);
}

function limpiar(){
    in_euros.value = "";
    textoMain.style.color = "white";
}