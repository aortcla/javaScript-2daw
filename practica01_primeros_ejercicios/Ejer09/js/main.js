const mostrar = document.getElementById("mostrar");
const boton = document.getElementById("boton");

boton.onclick = piramide;

/************************** FUNCTIONS ******************************/
function piramide(){
    for(let cont1 = 1; cont1 <= 50; cont1++){
        for(let cont2 = 1; cont2 <= cont1; cont2++){
            mostrar.innerHTML += cont2;
        }
        mostrar.innerHTML += "<br>";
    }
}
