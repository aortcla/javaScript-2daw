const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const h11 = document.getElementById("h11");
const btSumar = document.getElementById("btSumar");

btSumar.onclick = doSuma;

/*********************** FUNCTIONS **************************/

function doSuma(){
    let a = parseFloat(in1.value);
    let b = parseFloat(in2.value);
    if(typeof a == "number" && typeof b == "number"){ 
        h11.innerHTML += (a +b);
        in1.value = "0";
        in2.value = "0";
    }else{
        h11.innerHTML = "Valores no validos para hacer la suma";
    }
}

// let myArray = [1,2,3,4,5,true,7,8,9,10];

// for(let elem of myArray){
//     if(!(typeof elem == "boolean")){
//         h11.innerHTML += elem+"<br>";
//     }else{
//         break;
//     }
// }



//Bucle for clasico de java

// for(let i = 0; i < myArray.length; i++){
//     if(!(typeof myArray[i] == "boolean")){
//         h11.innerHTML += myArray[i]+"<br>";
//     }else{
//         break;
//     }
   
// }

//Otra manera de recorrer el array con un nuevo tipo de bucle "for in"
// for(let elem in myArray){
//     if(!(typeof myArray[elem] == "boolean")){
//         h11.innerHTML += myArray[elem]+"<br>";
//     }else{
//         break;
//     }
// }

/*********************** FUNCTIONS *************************/
// document.getElementById("bt1").addEventListener("click", function(){

//     try{

//         let numItems = document.getElementById("numItemsCarrito").value;

//         if((numItems == "") || (numItems == 0)){
//             throw Error ("Valor del numero está vacio o es 0!!");
//         }

//         numItems = parseInt(numItems);

//         switch(numItems){
//             case 1:
//             case 2:
//             case 3:
//                 alert("Muy mal");
//                 break;
//             case 4:
//             case 5:
//             case 6:
//                 alert("Mal");
//                 break;
//             case 7:
//             case 8:
//             case 9:
//                 alert("Bien");
//                 break;
//             case 10:
//                 alert("Muy bien");
//                 break;
//             default:
//                 alert("Valor no valido");
//                 break;
//         }

//     }catch(err){
//         alert("Error: "+err);
//     }

// })

function suma(num1, num2){
    return num1 + num2;
}