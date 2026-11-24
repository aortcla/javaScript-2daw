const info = document.getElementById("info");

info.innerHTML = `Numero de formularios en la app: ${document.forms.length}`;

document.getElementById("aForm1").onclick = function(){
    if(document.forms.length > 1){
        const primerForm = document.forms[0];
        console.log(`Primer formulario tiene ${primerForm.elements.length} elementos`);
        console.log(`login introducido ${primerForm.elements[0].value}`);
    }
}
