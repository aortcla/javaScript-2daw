const in1 = document.getElementById("in1");
const boton = document.getElementById("boton");
const mostrar = document.getElementById("mostrar");

let numAdivinar = Math.floor((Math.random()*100)+1);
let intentos = 0;

boton.onclick = principal;

/******************************* FUNCTIONS *******************************/
function principal(){
    let numIntroducido = parseFloat(in1.value);
    if(isNaN(numIntroducido)){
        mostrar.innerHTML = "El valor introducido no es numérico";
    }else{

        intentos++;

       
        if(numIntroducido == numAdivinar){
            mostrar.innerHTML = "¡Enhorabuena has acertado!<br>";
            mostrar.innerHTML += "Numero de intentos "+intentos;
            limpiar();
        }else if(numIntroducido < numAdivinar){
            mostrar.innerHTML = "El numero es mayor a "+numIntroducido;
            limpiar();
         }else if(numIntroducido  > numAdivinar){
            mostrar.innerHTML= "El numero es menor a "+numIntroducido;
            limpiar();
        }
        
        
    }
}

function limpiar(){
    in1.value = "";
}