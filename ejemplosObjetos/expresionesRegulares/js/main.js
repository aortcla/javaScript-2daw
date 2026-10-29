const dni = document.getElementById("dni");
const info = document.getElementById("info");
const botonDNI = document.getElementById("botonDNI");
const correo = document.getElementById("correo");
const botonCorreo = document.getElementById("botonCorreo");
const telefono = document.getElementById("telefono");
const botonTel = document.getElementById("botonTel");

let expresionDNI = /^([0-9]{8}|[XYZ][0-9]{7})[A-Z]$/;
let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
let expresionTelefono = /^(\+\d{1,2})?\d{9}$/;

botonDNI.onclick = () =>{
    if(expresionDNI.test(dni.value.trim())){
        info.innerHTML = "Expresion Correcta :)";
    }else{
        info.innerHTML = "Expresion INCORRECTA!!!"
    }
};

botonCorreo.onclick = () =>{
    if(expresionCorreo.test(correo.value.trim())){
        info.innerHTML = "Expresion Correcta :)";
    }else{
        info.innerHTML = "Expresion INCORRECTA!!!"
    }
};

botonTel.onclick = () =>{
    if(expresionTelefono.test(telefono.value.trim())){
        info.innerHTML = "Expresion Correcta :)";
    }else{
        info.innerHTML = "Expresion INCORRECTA!!!"
    }
};
