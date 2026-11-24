const info = document.getElementById("info");

const paises = document.getElementById("paises").getElementsByTagName("li");

for (const pais of paises) {
    pais.addEventListener('click', pulsaPais);
}

/****************************************************************************************/
function pulsaPais(e){
    if(e.target.parentNode.getElementsByTagName("li").length == 0){
        e.target.parentNode.remove();
    }else{
        e.target.remove();
    }
        
}