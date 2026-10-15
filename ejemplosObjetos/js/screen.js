const h21 = document.getElementById("h21");

h21.innerHTML += `Ancho total: ${screen.availWidth}px, Alto total: ${screen.height}px<br>`;
h21.innerHTML += `Ancho total: ${screen.availWidth}px, Alto total: ${screen.availHeight}px<br>`;
h21.innerHTML += `Numero de bits para colores: ${screen.colorDepth}<br>`;
h21.innerHTML += `Orientacion de pantalla: ${screen.orientation.angle} grados<br>`;
h21.innerHTML += `Primera posision izquierda disponible: ${screen.availLeft}<br><br>`;

document.body.onresize = function(){
    if (screen.availWidth > screen.availHeight){
        h21.innerHTML = "Su pantalla esta tumbada";
    }else{
        h21.innerHTML = "Su pantalla está en vertical";
}
}
