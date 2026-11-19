
for (const elem of document.getElementsByTagName("div")) {
    elem.addEventListener("click", eventosDiv);
    elem.addEventListener("mouseenter", eventosDiv);
    elem.addEventListener("mouseleave", eventosDiv);
}



/************************************************************/
function eventosDiv(e){
    switch(e.type){
        case "click":
            let botonLocal = e.currentTarget.querySelector("h1");

            if(botonLocal.style.visibility === "hidden"){
                botonLocal.style.visibility = "visible";
            }else{
                botonLocal.style.visibility = "hidden";
            }
        break;
        case "mouseenter":
            e.currentTarget.style.backgroundColor = "#45829A";
        break;
        case "mouseleave":
            e.currentTarget.style.backgroundColor = "";
        break;
    }
}