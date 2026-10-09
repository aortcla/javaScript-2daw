const in1 = document.getElementById("in1");
const boton = document.getElementById("boton");
const mostrar = document.getElementById("mostrar");


boton.onclick = function(){
    let num = parseFloat(in1.value);
    arrow(num);
};

/*************************** FUNCTIONS ****************************/
function arrow(num){
    if(validacion(num) == true){
        mostrar.style.color = "white";
        if(num % 2 == 0){
            mostrar.innerHTML = "El numero es par";
        }else{
            mostrar.innerHTML = "El numero es impar";
        }
    }
}

function validacion(num){
    let final = true;

    if(isNaN(num)){
        mostrar.style.color = "red";
        mostrar.innerHTML = "Error el valor no es numerico";
        final = false;
    }

    return final;
}
