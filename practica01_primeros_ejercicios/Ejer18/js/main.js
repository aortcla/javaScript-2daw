const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const boton = document.getElementById("boton");
const mostrar = document.getElementById("mostrar");
const menu = document.getElementById("menu");

menu.innerHTML = "Menú<br>"+
                    "---------------------------<br>"+
                    "1. Calcular si es multiplo de 2<br>"+
                    "2. Calcular si es multiplo de 3<br>"+
                    "3. Calcualr si es multiplo de 5<br>"+
                    "0. Salir<br>";

boton.onclick = validar;

/******************************* FUNCTIONS ********************************/
function validar(){
    let op = parseInt(in1.value);
    let numero = parseInt(in2.value);

    if(isNaN(op) || isNaN(numero)){
        mostrar.style.color = "red";
        mostrar.innerHTML += "Error alguno de los valores no es numerico<br>";
    }else{
        mostrar.style.color = "white";
        switch (op) {
            case 0: 
                mostrar.innerHTML += "<br>SALIENDO DEL MENU";
            break;
            case 1: if(numero % 2 == 0){
                mostrar.innerHTML = "El numero es multiplo de 2";
            }else{
                mostrar.innerHTML = "El numero NO es multiplo de 2";
            }break;
            case 2: if(numero % 3 == 0){
                mostrar.innerHTML = "El numero es multiplo de 3";
            }else{
                mostrar.innerHTML = "El numero NO es multiplo de 3";
            }break;
            case 3: if(numero % 5 == 0){
                mostrar.innerHTML = "El numero es multiplo de 5";
            }else{
                mostrar.innerHTML = "El numero NO es multiplo de 5";
            }break;
            
            default:
                mostrar.innerHTML += "<br>LA OPCION NO ESTA DISPONIBLE!!"
            break;
            
        
        }
    }
}