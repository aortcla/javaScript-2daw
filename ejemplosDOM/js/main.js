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
       /*  if(listaPaises.length % 2 == 0)
            nuevoNodoPais.className = "impares";
        else
            nuevoNodoPais.className = "pares"; */
        
        let nuevoNodo = creaNodo("li", nuevoPais, "", "pares");

        if(nuevoNodo)
            document.getElementById("paises").appendChild(nuevoNodo);
}
}


/**
 * Funcion que crea nodos automaticamente
 * @param string tipo
 * @param string text 
 * @param string id 
 * @param string clase
 * 
 */
function creaNodo(tipo, texto, id, clase){
    let elemento = null;
    if((tipo) && (typeof tipo === "string")){
        elemento = document.createElement(tipo);
    }

    if((texto != "") && (typeof texto == "string")){
        let elementoText = document.createTextNode(texto);
        elemento.appendChild(elementoText);
    }

    if(id != ""){
        elemento.id = id;
    }
    if((clase) && (typeof clase === "string")){
        elemento.className = clase;
    }

    return elemento;

}

/************************************************************************/

document.getElementById("btBorraPais").onclick = () => {
    let lista = document.getElementById("paises");
    let opcionesLista = lista.getElementsByTagName("li");

    if(opcionesLista.length > 3){
        //remoceChild devuelve el nodo borrado
        opcionesLista[2].parentNode.removeChild(opcionesLista[2]);
        //opcionesLista[2].remove();
    }

}