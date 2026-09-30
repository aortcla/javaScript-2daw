const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const h11 = document.getElementById("h11");
const btSumar = document.getElementById("btSumar");

let num1, num2;

btSumar.onclick = suma;



/*********************** FUNCTIONS **************************/


//funcion que realiza la suma pero antes llama a otra funcion para sumarle 5 al primer numero
function suma(){

    num1 = parseFloat(in1.value);
    //num2 = parseFloat(in2.value);

    //llamada a la funcion de validacion de tipo
    validacionTipos();

    //llamamos a las funciones que alteran el valor del primer numero
    aumentaPrimerNumero();

    let total = num1 + num2;

    h11.innerHTML = num1+" + "+num2+" = "+total;
}

//funcion que le suma 5 al primer numero y tambien llama a otra funcion que le resta 2 al segundo nummero
function aumentaPrimerNumero(){
    disminuyeSegundoNumero();
    for(let i = 0; i < 5; i++){
        num1++;
    }
}

//funcion que le resta 2 a el segundo numero de la operacion inicial
function disminuyeSegundoNumero(){
    num2 -= 2;
}

//funcion de validacion de tipo de los numeros
function validacionTipos(){
    if(typeof num1 == "number" && typeof num2 == "number"){
        return true;
    }else{
        throw new Error("Las variables no son de tipo number");
    }
}