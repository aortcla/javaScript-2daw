const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const boton = document.getElementById("boton");
const mostrar = document.getElementById("mostrar");

boton.onclick = principal;

/*************************** FUNTIONS ********************************/

function principal(){
    let num1 = parseFloat(in1.value);
    let num2 = parseFloat(in2.value);

    if(!isNaN(num1) && !isNaN(num2)){
        if((num1 > -100 && num1 <= 5000) && (num2 <= 5000 && num2 > -100)){
            mostrar.style.color = "white";
            mostrarPares();
        }else{
            mostrar.style.color = "red";
            mostrar.innerHTML = "Error";
        }
    }else{
        mostrar.style.color = "red";
        mostrar.innerHTML = "Error uno o los 2 campos no son valores numericos";
    }


}

function mostrarPares(){
    let num1 = parseFloat(in1.value);
    let num2 = parseFloat(in2.value);

    if(num1 % 2 != 0){
        num1++;
    }
    mostrar.innerHTML = "";
    for(let i = num1; i <= num2; i++){
        mostrar.innerHTML += i+", ";
    }
}