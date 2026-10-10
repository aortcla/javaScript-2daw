const boton = document.getElementById("boton");
const botonAleatorio = document.getElementById("botonAleatorio");
const mostrar = document.getElementById("mostrar");

boton.onclick = pum;
botonAleatorio.onclick = pumAleatorio;

/************************** FUNCTIONS **************************/
function pum(){
    let texto = "";

    for(let i = 1; i <= 100; i++){
        if(i % 7 == 0 || i % 10 == 7){
            texto += "PUM!!<br><br>";
        }else{
            texto += i+", ";
        }
    }

    mostrar.innerHTML = texto;
}

function pumAleatorio(){
    let texto = "";

    for(let i = 1; i <= 100; i++){
        let aleatorio = Math.floor((Math.random()*100)+1);
        if(aleatorio % 7 == 0 || aleatorio % 10 == 7){
            texto += "PUM!!<br><br>";
        }else{
            texto += aleatorio+", ";
        }
    }

    mostrar.innerHTML = texto;
}
