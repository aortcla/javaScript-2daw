import muestraPassword, {saludar as sayHello, edad, Usuario as User} from "./usuarios.js";

const info = document.getElementById("info");
const btn1 = document.getElementById("btn1");

info.innerHTML = sayHello("Pepe")+ ` tienes ${edad} años`;
info.innerHTML += "<br>"+ muestraPassword();

btn1.addEventListener('click', async function() {
        await import("./usuarios.js");
        info.innerHTML = `Contraseña ${muestraPassword()}`;
})

var user1 = new User("Pepe", "Ordoñez");

info.innerHTML = `Usuario ${user1.nombre} ${user1.apellidos} creado correctamente`;

var user2 = new User();

info.innerHTML += `<hr>Usuario ${user2.nombre} ${user2.apellidos} creado correctamente con password ${user2.password}`;

var user3 = new User("Ana", undefined, "ghfdskl??");

info.innerHTML += `<hr>Usuario ${user3.nombre} ${user3.apellidos} creado correctamente con password ${user3.password}`;