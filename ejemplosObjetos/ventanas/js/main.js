const info = document.getElementById("info");
const login = document.getElementById("login");
const email = document.getElementById("gmail");

var userWindow = null;

document.cookie = `login=${login.value}`;


/* document.getElementById("aSendMail").onclick = function(){

    try{
        if(login.value == ""){
            throw Error("Nombre vacío");
        }if(document.getElementById("password").value == ""){
            throw Error("Contraseña vacía");
        }if(email.value == ""){
            throw Error("Gmail vacío");
        }

        if((!userWindow) || (userWindow.closed)){
            userWindow = window.open("src/mail.html", "_blank", "width=400,height=400,top=200");
        }
        else {
            alert("Ya tienes la ventana mail abierta");
            userWindow.focus();
        }

        userWindow.onload = function(){
            userWindow.document.getElementById("email").value = login.value;
        }

    }catch(err){
        info.innerHTML = err;
        setTimeout(function (){info.innerHTML = ""},3000);
    }
}


document.getElementById("aMoveWindow").onclick = function(){
    if(userWindow){
        userWindow.moveTo(500, 200);
        userWindow.focus();
    }else{
        alert("La ventana ya se cerró")
    }
} */