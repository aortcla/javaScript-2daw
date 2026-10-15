const h31 = document.getElementById("h31");

let navigatorObject = new Object({
    useragent: navigator.userAgent,
    platform: navigator.platform,
    idiomas: navigator.language,
    conectado: navigator.onLine,
    galletas: navigator.cookieEnabled,
    cpus: navigator.hardwareConcurrency,
    ram: navigator.deviceMemory
});

h31.innerHTML += "Navegador y sistema: "+navigatorObject.useragent+"<br>";
h31.innerHTML += "Sistema: "+navigatorObject.platform+"<br>";
h31.innerHTML += "Idioma: "+navigatorObject.idiomas+"<br>";
h31.innerHTML += "Conectado: "+navigatorObject.conectado+"<br>";
h31.innerHTML += "¿Se permiten cookies?: "+navigatorObject.galletas+"<br>";
h31.innerHTML += "CPUs: "+navigatorObject.cpus+"<br>";
h31.innerHTML += "Ram: "+navigatorObject.ram+"<br>";