const info = document.getElementById("info");
const listaColores = document.getElementById("colores");
const areaDeTexto = document.getElementById("areaDeTexto");

info.innerHTML = `Numero de formularios en la app: ${document.forms.length}`;

document.getElementById("aForm1").onclick = function(){
    if(document.forms.length > 1){
        const primerForm = document.forms[0];
        console.log(`Primer formulario tiene ${primerForm.elements.length} elementos`);
        console.log(`login introducido ${primerForm.elements[0].value}`);
    }
}

listaColores.addEventListener('change', function(e){
    info.innerHTML = "Color seleccionado: "+this.value;

    document.body.style.backgroundColor = e.target.value;

    console.dir(e.target.selectedIndex);
    console.dir(e.target.options[e.target.selectedIndex].text);
    console.dir(e.target.selectedOptions);

})

areaDeTexto.addEventListener("input", (e) => {
    let ultima = e.target.value.charAt(e.target.value.length-1);

    if( ultima == "e" || ultima == "E"){
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
})

const login = document.getElementById("login");

areaDeTexto.focus();

document.getElementById("range1").addEventListener("change", (e) => {
    console.log("valor del range: "+e.target.value);
    info.innerHTML = `Valor del range: ${e.target.value}`
})