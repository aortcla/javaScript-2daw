//no esta bien hecho

const mostrar = document.getElementById("mostrar");

principal();

/************************** FUNCTIONS *****************************/
function principal(){
    for(let i = 0; i < 300; i++){
        if(i % 10 == 0){
            mostrar.innerHTML += "<br>"+i+", ";
        }
        if(i % 4 == 0){
            multiploDe4();
            mostrar.innerHTML += i+", ";
            resetear();
        }
        if(i % 9 == 0){
            multiploDe9();
            mostrar.innerHTML += i+", ";
            resetear();
        }

        mostrar.innerHTML += i+", ";
    }
}

function resetear(){
    mostrar.style.fontSize = "16px";
    mostrar.style.color = "white";
}

function multiploDe4(){
    mostrar.style.fontSize = "4px";
    mostrar.style.color = "green";
}

function multiploDe9(){
    mostrar.style.fontSize = "2px";
    mostrar.style.color = "red";
}