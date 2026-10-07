const h11 = document.getElementById("h11");

let myAlum = {
    name: "John",
    mail: "john@mail.com",
    age: 19,

}

myAlum.grades = [6,7.85,9.25];
myAlum.age = 21;
delete myAlum.name;

h11.innerHTML = "Nombre de alumno/a"+ myAlum.name + ".Nota 1: "+myAlum.grades[0]+".Edad; "+myAlum.age;

let myAlum2 = new Object();

myAlum2.name="Anne";
myAlum2.surname = "Flowers";
myAlum2.age = 21;
myAlum2.active = false;
myAlum2.mail = "anne@mail.com";
myAlum2.grades = [6.9,8.85,10];

delete myAlum2.name;
h11.innerHTML += "<br>Nombre de alumno/a"+ myAlum2.name + ".Nota 1: "+myAlum2.grades[0]+".Phone: "+myAlum2.phone;


Object.defineProperties(myAlum2, {
    name: {value: "Pepe"},
    surname: {value: "Perez"},
    age: {value: 21}
});

h11.innerHTML += "<br>Nombre de alumno/a "+ myAlum2.name + ". Apellido: "+myAlum2.surname+". Edad: : "+myAlum2.age;

