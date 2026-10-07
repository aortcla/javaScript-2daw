const inRadio = document.getElementById("inRadio");
const mostrar = document.getElementById("mostrar");
const boton = document.getElementById("boton");

boton.onclick = muestraTodo;

/************************** FUNCTIONS ******************************/
function muestraTodo(){
    if(!isNaN(parseFloat(inRadio.value))){
        mostrar.style.color = "white";
        mostrar.innerHTML = "El área es: "+calculaArea()+"<br>"+
                            "El perímetro es: "+calculaPerimetro();
    }else{
        mostrar.style.color = "red";
        mostrar.innerHTML = "Error el valor introducido no es un numero";
    }
}

function calculaArea(){
    let radio = parseFloat(inRadio.value);

    let area = (2 * Math.PI) * Math.pow(radio, 2);

    return area;

}

function calculaPerimetro(){
    let radio = parseFloat(inRadio.value);

    let perimetro = (2 * Math.PI) * radio;

    return perimetro;

}