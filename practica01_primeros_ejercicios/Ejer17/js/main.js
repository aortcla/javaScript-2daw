const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const boton = document.getElementById("btComenzar");
const mostrar = document.getElementById("mostrar");

boton.onclick = calcularMenor;

/*************************************** FUNCTIONS *****************************************/
function calcularMenor(){
    let num1 = parseFloat(in1.value);
    let num2 = parseFloat(in2.value);

    if(num1 > num2){
        mostrar.innerHTML = "El primer numero es mayor al segundo<br>";
        principal(num1, num2);
    }else if(num2 > num1){
        mostrar.innerHTML = "El segundo numero es mayor al primero<br>";
        principal(num2, num1);
    }else{
        mostrar.style.color = "red";
        mostrar.innerHTML = "Error los numeros son iguales";
    }
}

function principal(mayor, menor){
    mostrar.style.color = "white";

    let cont = 0;

    for(let i = menor+1; i < mayor; i++){
        cont++;
        mostrar.innerHTML += i+", ";
    }

    mostrar.innerHTML += "<br>Entre los 2 numeros hay "+cont+" numeros";

}