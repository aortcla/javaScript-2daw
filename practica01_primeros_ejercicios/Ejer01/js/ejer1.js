const in_nombre = document.getElementById("in_nombre");
const in_apellido = document.getElementById("in_apellido");
const in_curso = document.getElementById("in_curso");
const in_nota1 = document.getElementById("in_nota1");
const in_nota2 = document.getElementById("in_nota2");
const in_notaFinal = document.getElementById("in_notaFinal");
const p_mostrar = document.getElementById("p_mostrar");

const botonRellenar = document.getElementById("botonRellenar");
const botonMostrar = document.getElementById("botonMostrar");

let array = [];

botonRellenar.onclick = rellenaArray;
botonMostrar.onclick = muestraArray;

/**************************** FUNCTIONS *************************************/
function rellenaArray(){
    let arrayAux = [
        in_nombre.value,
        in_apellido.value,
        in_curso.value,
        in_nota1.value,
        in_nota2.value,
        in_notaFinal.value
    ];

    array.push(arrayAux);

    limpiarInputs();
}

function muestraArray(){
    let cadena = ""; 

    for(let fila = 0; fila < array.length; fila++){
        for(let col = 0; col < array[fila].length; col++){
            cadena += array[fila][col] +" ";
        }
        cadena += "<br>";
    }

    p_mostrar.innerHTML = cadena;
}

function limpiarInputs(){
    in_nombre.value = "";
    in_apellido.value = "";
    in_curso.value = "";
    in_nota1.value = "";
    in_nota2.value = "";
    in_notaFinal.value = "";
}
