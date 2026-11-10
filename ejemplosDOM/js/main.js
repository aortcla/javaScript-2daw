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
function creaNodo(tipo, texto, id){
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

/**************************************************/
const sections1 = document.getElementsByClassName("section1");
let enlaceImagen = creaNodo("a", "Cambiar imagen", "");
enlaceImagen.style = "background-color:#1276af;border-radius:5px;border:1px solid black;cursor:pointer;padding:0.5%;";

let borraAtributo = creaNodo("a", "Borrar atributo", "");
borraAtributo.style = "background-color:#1276af;border-radius:5px;border:1px solid black;cursor:pointer;padding:0.5%;";


if(sections1.length >= 2 ){
    sections1[1].appendChild(enlaceImagen);
    sections1[1].appendChild(borraAtributo);

    enlaceImagen.onclick = function () {
        sections1[1].getElementsByTagName("img")[0].src = "./img/imagen2.webp";
    }

    borraAtributo.onclick = function () {
        sections1[1].getElementsByTagName("img")[0].removeAttribute("src");
    }

}

let inBloquear = creaNodo("input", "", "");
let btBloquear = creaNodo("button", "Bloquear", "");

if(sections1.length >= 3){
    sections1[2].appendChild(inBloquear);
    sections1[2].appendChild(btBloquear);

    btBloquear.onclick = function () {
        if(btBloquear.innerText == "Bloquear"){
            sections1[2].getElementsByTagName("input")[0].setAttribute("readonly", "true");
            btBloquear.innerText = "Desbloquear";
        }else{
            sections1[2].getElementsByTagName("input")[0].removeAttribute("readonly");
            btBloquear.innerText = "Bloquear";
        }
    }
}
/**************************************************************************/
document.getElementById("bDevuelveImpares").onclick = function () {
    let lista2 = document.querySelectorAll(".paises li");
    let arrayImpares = new Array();

    for (let paisImpar = 0; paisImpar < lista2.length; paisImpar+=2) {
        arrayImpares.push(lista2[paisImpar].innerText);
    }

    console.dir(arrayImpares);
}
/************************************************/
document.getElementById("modoNoche").addEventListener("click", ()=> {
    document.body.style.backgroundColor = "darkgrey";
    document.body.style.color = "white";
    const buttons = document.getElementsByTagName("button");

    for (const btn of buttons) {
        btn.style.backgroundColor = "darkgray";
        btn.style.color = "white";

    }

    const links = document.getElementsByTagName("a");

    for (const lk of links) {
        lk.style.backgroundColor = "brown";
        lk.style.color = "white";

    }

})