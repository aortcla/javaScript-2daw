const innombre = document.getElementById("nombre");
const inapellido = document.getElementById("apellido");
const inhoras = document.getElementById("horas");
const rbmañana = document.getElementById("mañana");
const rbtarde = document.getElementById("tarde");
const rbnoche = document.getElementById("noche");
const botonInsertar = document.getElementById("botonInsertar");
const botonMostrar = document.getElementById("botonMostrar");
const mostrar = document.getElementById("mostrar");

let listaTrabajadoresGuardados = [];

botonInsertar.onclick = insertarTrabajador;
botonMostrar.onclick = mostrarSalarios;

/****************************************** FUNCTIONS ***********************************************/
function insertarTrabajador(){
    let nombre = innombre.value;
    let apellido = inapellido.value;
    let horas = parseFloat(inhoras.value);
    let mañana = rbmañana.checked;
    let tarde = rbtarde.checked;
    let noche = rbnoche.checked;

    if(validarTrabajador()){
        mostrar.style.color = "white";
        listaTrabajadoresGuardados.push([nombre, apellido,horas,mañana, tarde,noche,  calcularBruto(mañana, tarde,noche,horas), calcularNeto(mañana, tarde,noche,horas)]);
        limpiar();

    }else{
        mostrar.style.color = "red";
        mostrar.innerHTML += "Error los campos no son correctos"
    }

}

function calcularBruto(mañana, tarde,noche, horas){
    let total = 0;

    if(mañana){
        total = horas * 25;
    }else if(tarde){
        total = horas * 30;
    }else if(noche){
        total = horas * 35;
    }

    return total;
}

function calcularNeto(mañana, tarde,noche,horas){
    let bruto = calcularBruto(mañana, tarde,noche,horas);
    let neto = 0;

    if(bruto < 600){
        neto = bruto - (bruto * 0.08);
    }else if(bruto >= 600 && bruto < 1000){
        neto = bruto - (bruto * 0.10);
    }else{
        neto = bruto - (bruto * 0.12);
    }

    return neto;

}

function mostrarSalarios(){
    mostrar.innerHTML = "";
    mostrar.style.color = "white";

    for(let elem of listaTrabajadoresGuardados){
        mostrar.innerHTML += "Nombre: "+elem[0]+
                            "<br>Apellido: "+elem[1]+
                            "<br>Horas trabajadas: "+elem[2]+
                            "<br>Mañana: "+elem[3]+
                            "<br>Tarde: "+elem[4]+
                            "<br>Noche: "+elem[5]+
                            "<br>Salario Bruto: "+elem[6]+
                            "<br>Salario Neto: "+elem[7]+
                            "<br>----------------------------<br>";
    }
}

function validarTrabajador(){
    let valido = true;
        if(isNaN(inhoras.value)){
            valido = false;
        }

        if(rbmañana.checked == false && rbtarde.checked == false && rbnoche.checked== false){
            valido = false;
        }
    return valido;
}

function limpiar(){
    nombre.value = "";
    apellido.value = "";
    horas.value = "";
    mañana.checked = false;
    tarde.checked = false;
    noche.checked = false;
}
