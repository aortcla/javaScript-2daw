const teclaPulsada = document.getElementById("teclaPulsada");

document.body.addEventListener('keydown', (e) => {
    if(e.code !== "Space"){
         teclaPulsada.innerHTML += `Has pulsado la tecla ${e.key}, -CODE ${e.code}<hr>`;
    }else{
        teclaPulsada.innerHTML += "<br>";
    }
       
    if(e.code === "KeyN" && e.altKey){
        teclaPulsada.innerHTML = "";
    }

});

document.getElementById("ta1").addEventListener('keydown', (e) => {
    if(e.code === "KeyN")
        e.target.value = "No se permite la N";
});

const pCoord = document.getElementById("pCoord");

document.body.addEventListener('mousemove', (e) => {
    pCoord.innerHTML = `(page --> X: ${e.pageX}, Y: ${e.pageY})<br>`;
    pCoord.innerHTML += `(screen --> X: ${e.screenX}, Y: ${e.screenY})`;
});