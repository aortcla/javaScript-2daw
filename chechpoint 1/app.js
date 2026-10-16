
// Catálogo de servicios: el id coincide con el id del input del HTML
const SERVICIOS = [
  { id: "aceite", nombre: "Cambio de aceite", precio: 45 },
  { id: "filtros", nombre: "Cambio de filtros", precio: 30 },
  { id: "frenos", nombre: "Pastillas de freno (eje)", precio: 80 },
  { id: "neumaticos", nombre: "Neumático", precio: 70 },
  { id: "alineado", nombre: "Alineado de dirección", precio: 35 }
];

//constantes para haver el calculo
const MULT_MOTO = 0.7;
const MULT_TURISMO = 1;
const MULT_SUV = 1.2;
const MULT_FURGONETA = 1.35;

const nombre = document.getElementById("cliente");
const matricula = document.getElementById("matricula");
const vehiculo = document.getElementById("vehiculo");

const inAceite = document.getElementById("aceite");
const inAFiltros = document.getElementById("filtros");
const inFrenos = document.getElementById("frenos");
const inNeumaticos = document.getElementById("neumaticos");
const inAlineado = document.getElementById("alineado");

const formaPago = document.getElementById("pago");
const botonPresupuesto = document.getElementById("btnPresupuesto");
const botonLimpiar = document.getElementById("btnLimpiar");

const mensaje = document.getElementById("mensaje");

botonPresupuesto.onclick = crearPresupuesto;

/************************************ FUNCTIONS *******************************************/
function crearPresupuesto(){
  if(!validaciones()){
    mensaje.innerHTML += "Error de validacion<br>";
  }else{
    mostrarFinal();
  }

}

function basePresupuesto(){
  let base = 0;
  let op = vehiculo.value;
  switch (op) {
    case "moto":
      base += (inAceite.value * parseFloat(SERVICIOS[0].precio));
      base += (inAFiltros.value * parseFloat(SERVICIOS[1].precio));
      base += (inFrenos.value * parseFloat(SERVICIOS[2].precio));
      base += (inNeumaticos.value * parseFloat(SERVICIOS[3].precio));
      base += (inAlineado.value * parseFloat(SERVICIOS[4].precio));
      base = base *MULT_MOTO;
      break;
    case "turismo":
      base += (inAceite.value * parseFloat(SERVICIOS[0].precio));
      base += (inAFiltros.value * parseFloat(SERVICIOS[1].precio));
      base += (inFrenos.value * parseFloat(SERVICIOS[2].precio));
      base += (inNeumaticos.value * parseFloat(SERVICIOS[3].precio));
      base += (inAlineado.value * parseFloat(SERVICIOS[4].precio));
      base = base *MULT_TURISMO;
      break;
    case "suv":
      base += (inAceite.value * parseFloat(SERVICIOS[0].precio));
      base += (inAFiltros.value * parseFloat(SERVICIOS[1].precio));
      base += (inFrenos.value * parseFloat(SERVICIOS[2].precio));
      base += (inNeumaticos.value * parseFloat(SERVICIOS[3].precio));
      base += (inAlineado.value * parseFloat(SERVICIOS[4].precio));
      base = base *MULT_SUV;
      break;
    case "furgoneta":
      base += (inAceite.value * parseFloat(SERVICIOS[0].precio));
      base += (inAFiltros.value * parseFloat(SERVICIOS[1].precio));
      base += (inFrenos.value * parseFloat(SERVICIOS[2].precio));
      base += (inNeumaticos.value * parseFloat(SERVICIOS[3].precio));
      base += (inAlineado.value * parseFloat(SERVICIOS[4].precio));
      base = base *MULT_FURGONETA;
      break;
  }

  return base;
}

function recargoFormaPago(){
  let precio = descuento();
  let op = formaPago.value;

  if(op == "financiado"){
    precio = precio + (precio * 0.05);
  }

  return precio;
}

function mostrarFinal(){
  mensaje.innerHTML = "Total a pagar: "+ IVA().toFixed(2) +"€<br>"+
                      "Base: "+basePresupuesto().toFixed(2) +"€<br>"+
                      "Descuento: "+descuento().toFixed(2) +"€<br>"+
                      "Recargo por pago: "+recargoFormaPago().toFixed(2) +"€<br>";
}

function IVA(){
  let precio = recargoFormaPago();

  precio = precio + (precio * 0.21);

  return precio;
}

function descuento(){
  let precio = basePresupuesto();

  if(precio > 150 && precio < 300){
    precio = precio - (precio * 0.05);
  }else if(precio > 300){
    precio = precio - (precio * 0.1);
  }

  return precio;

}

function validaciones(){
  let valido = true;
  mensaje.innerHTML = "";
  if(nombre.value == ""){
    valido = false;
    mensaje.innerHTML += "Error: El nombre del cliente está vacio<br>";
  }

  if(matricula.value.length != 7){
    valido = false;
    mensaje.innerHTML += "Error: La matricula debe ser de 7 caracteres<br>";
  }

  if(vehiculo.value == "-- Selecciona --"){
    valido = false;
    mensaje.innerHTML += "Error: Debe seleccionar un vehiculo<br>";
  }

  if(inAceite.value == 0 && inAFiltros.value == 0 && inFrenos.value == 0 && inNeumaticos.value == 0 && inAlineado.value == 0){
    valido = false;
    mensaje.innerHTML += "Error: Debe selecionar un servicio<br>";
  }

  if(vehiculo.value == "moto" && inAlineado.value != 0){
    valido = false;
    mensaje.innerHTML += "Error: A una moto no se le puede aplicar el servicio de alineado<br>";
  }

  return valido;
}