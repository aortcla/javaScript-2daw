const botonMostrar = document.getElementById("botonMostrar");
const mostrar = document.getElementById("mostrar");

//expresion regular
const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

botonMostrar.onclick = generarPassword;

/******************************** FUNCTIONS **********************************/

function generarPassword(){
    let password = "";
    while(!expresion.test(password)){
        password = "";
        while(password.length < 10){
            let caracter = String.fromCharCode(parseInt(Math.floor(Math.random()*256)));
            password += caracter;
        }
    }
    mostrar.innerHTML = password;
}