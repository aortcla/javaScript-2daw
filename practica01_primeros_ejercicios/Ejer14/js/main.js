const mostrar = document.getElementById("mostrar");
const boton = document.getElementById("bt1");
const in1 = document.getElementById("in1");

let lista = [];

boton.onclick = recogeNum;

/*************************** FUNCTIONS *********************************/

function recogeNum(){
    let num = parseInt(in1.value);
    limpiar();
    principal(num);
}

function principal(num){
    if (isNaN(num)){
            mostrar.style.color = "red";
            mostrar.innerHTML = "El valor no es numérico";
    }else if(num == 0){
        mostrar.style.color = "white";
        mostrar.innerHTML = "El numero es 0<br>"
        lista.sort((a, b) => b - a);//ordenacion del array descendete 
        mostrar.innerHTML += lista;
    }else{
        lista.push(num);
    }
    
}

function limpiar(){
    in1.value = "";
}