const ball  = document.getElementById("ball");

ball.style.top = (parseInt(screen.availHeight / 2) - 50) + "px";
ball.style.left = "0px";

//funcion para que se mueva la pelota
const intervalo = setInterval(function() {
    let izq = parseInt(ball.style.left.substring(0, ball.style.left.length-2));
    if(izq < (screen.width - 100))
        ball.style.left = (izq + 10) + "px";
}, 40);

//cuando pasan 2 segundos para la pelota
setTimeout(function(){
   clearInterval(intervalo);
    ball.style.backgroundColor = "black"; 
}, 3000);

//boton para parar la pelota
document.getElementById("bStop").addEventListener("click", () => {
    clearInterval(intervalo);
    ball.style.backgroundColor = "black";
})
