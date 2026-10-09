const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const boton = document.getElementById("boton");
const mostrar = document.getElementById("mostrar");

boton.onclick = calcula;

/****************************** FUNCTIONS ***********************************/
function calcula(){
    let num1 = parseFloat(in1.value);
    let num2 = parseFloat(in2.value);

    if(valida_input() == true){
        mostrar.style.color = "white";
        mostrar.innerHTML = num1+" + "+num2 +" = "+ (num1 + num2)+"<br>"+
                            num1+ " - "+num2 +" = "+ (num1 - num2)+"<br>"+
                            num1+ " x "+num2+ " = "+ (num1 * num2)+"<br>"+
                            num1+ " / "+num2+" = "+ (num1 / num2);
    }
}

function valida_input(){
    let num1 = parseFloat(in1.value);
    let num2 = parseFloat(in2.value);

    let final = true;
    let texto = "";

    if(isNaN(num1)){
        texto += "Error el valor del campo 1 no es numerico<br>";
        final = false;
    }

    if(isNaN(num2)){
        texto += "Error el valor del campo 2 no es numerico<br>";
        final = false;
    }

    if(num1 == 0){
        texto += "Error el valor del campo 1 no puede ser 0<br>";
        final = false;
    }

    if(num2 == 0){
        texto += "Error el valor del campo 2 no puede ser 0<br>";
        final = false;
    }

    if(final == false){
        mostrar.style.color = "red";
        mostrar.innerHTML = texto;
    }

    return final;
}