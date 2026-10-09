const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const in3 = document.getElementById("in3");
const boton = document.getElementById("boton");
const mostrar = document.getElementById("mostrar");

boton.onclick = calcular;

/************************** FUNCTIONS *****************************/
function calcular(){
    let num1 = parseFloat(in1.value);
    let num2 = parseFloat(in2.value);
    let num3 = parseFloat(in3.value);

    let media;
    let texto = "La media final es de: ";

    if(validacion(num1, num2, num3) == true){

        mostrar.style.color = "white";
        media = (num1 + num2 + num3) / 3;
        media = media.toFixed(2);

        if(media < 5){
            texto += media+" (SUSPENSO)";

        }else if(media >= 5 && media < 7){
            texto += media+" (APROBADO)";

        }else if(media >= 7 && media <= 8.5){
            texto += media+" (NOTABLE)";
            
        }else if(media > 8.5 && media <= 10){
            texto += media+" (SOBRESALIENTE)";
            
        }

        mostrar.innerHTML = texto;

    }

}

function validacion(num1, num2, num3){
    let texto = "";
    let final = true;

    if(isNaN(num1)){
        texto += "Error el campo 1 no tiene un valor numerico<br>";
        final = false;
    }else if(num1 < 0 || num1 > 10){
        texto += "Error el campo 1 contiene un valor fuera del rango 0 a 10<br>";
        final = false;
    }

    if(isNaN(num2)){
        texto += "Error el campo 2 no tiene un valor numerico<br>";
        final = false;
    }else if(num2 < 0 || num2 > 10){
        texto += "Error el campo 2 contiene un valor fuera del rango 0 a 10<br>";
        final = false;
    }

    if(isNaN(num3)){
        texto += "Error el campo 3 no tiene un valor numerico<br>";
        final = false;
    }else if(num3 < 0 || num3 > 10){
        texto += "Error el campo 3 contiene un valor fuera del rango 0 a 10<br>";
        final = false;
    }

    if(final == false){
        mostrar.style.color = "red";
        mostrar.innerHTML = texto;
    }
    return final;

}