var userWindow = null;

document.getElementById("aSendMail").onclick = function(){
    if((!userWindow) || (userWindow.closed)){
        userWindow = window.open("src/mail.html", "_blank", "width=400,height=400,top=200");
    }
    else {
        alert("Ya tienes la ventana mail abierta");
        userWindow.focus();
    }
}


document.getElementById("aMoveWindow").onclick = function(){
    if(userWindow){
        userWindow.moveTo(500, 200);
        userWindow.focus();
    }else{
        alert("La ventana ya se cerró")
    }
}