const info = document.getElementById("info");
let listaPaises = document.getElementsByClassName("li");
const opcionesRadio = document.getElementsByName("edad");

try{
    const opciones = listaPaises.getElementsByTagName("li");

    console.log("Numero de opciones de la lista: "+opciones.length);
    console.log(opciones);

    info.innerHTML += opciones[2].innerHTML;

}catch(e){
    console.error(e);
}

info.innerHTML = "Opciones del radio edad: ";
for (const elem of opcionesRadio) {
    info.innerHTML+= elem.value+", ";
}

/*********************************************************************************/

const clasePaises = document.getElementsByClassName("clasePaises");
const botonCambiaEstilos = document.getElementById("botonCambiaEstilos");

botonCambiaEstilos.onclick = () => {
    for (const elem of clasePaises) {
        if(elem.className == "impares")
            elem.className = "pares";
        else
            elem.className = "impares";
    }
}

/*********************************************************************************/
document.getElementById("btNuevoPais").onclick = () => {

    listaPaises = document.getElementsByClassName("li");
    let nuevoPais = document.getElementById("nuevoPais").value;

    if(nuevoPais == ""){
        info.innerHTML = "Debe escribir un pais";
    }else{
        let nuevoNodoPais = document.createElement("li");
        if(listaPaises.length % 2 == 0)
            nuevoNodoPais.className = "impares";
        else
            nuevoNodoPais.className = "pares";
        
        let nuevoNodoPaisText = document.createTextNode(nuevoPais);
        nuevoNodoPais.appendChild(nuevoNodoPaisText);
        document.getElementById("paises").appendChild(nuevoNodoPais);
}
}
