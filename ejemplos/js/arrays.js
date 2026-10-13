const mostrar = document.getElementById("mostrar");

let myArray = new Array();

myArray.push("Pepe");
myArray.push(56);
myArray.push(true);
myArray.push("Ana");
myArray.push(78.98);
myArray.push(new Array(1,2,3));
myArray.push({marca: "Ford", matricula: "123456A"});
myArray.push(false);
myArray.push(Math.PI);

/* for(let index = 0; index < myArray.length; index++){
    if((typeof myArray[index] == "object") && (Object.hasOwn(myArray[index],"marca")) && (Object.hasOwn(myArray[index],"matricula"))){
        mostrar.innerHTML += "{Marca: "+myArray[index].marca + ", Matricula: "+myArray[index].matricula+"} - ";
    }else

        if(index == (myArray.length - 1)){
            mostrar.innerHTML += myArray[index];
        }else{
            mostrar.innerHTML += myArray[index]+ " - ";
        }
    
}

let myBooleanArray = myArray.filter(function(elem) {
        return (typeof elem == "boolean");
});

mostrar.textContent = "";
for(let elem of myBooleanArray){
    mostrar.textContent += elem + " - ";
} */

let myMap = new Map();

myMap.set(1, "Pepe");
myMap.set(2, "María");
myMap.set(true, "Antonio");
myMap.set("123456c", "Ana");

mostrar.innerHTML = "";
for([clave, valor] of myMap){
    mostrar.innerHTML += `Clave ${clave}: ${valor}<br>`;
}
mostrar.innerHTML += `Tamaño del mapa ${myMap.size}`;
