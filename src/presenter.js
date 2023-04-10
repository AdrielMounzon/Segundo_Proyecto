import {mostrarControles,mostrarInstrucciones } from "./mensajes";
import Juego from "./juego";
const divInstrucciones = document.querySelector("#instrucciones-div");
const divControles = document.querySelector("#controles-div");
const formulario=document.querySelector("#controlador-form");
const divResultado=document.querySelector("#resultado-div");
const cadenaComandos=document.querySelector("#ComandosIngresados");
divControles.innerHTML="<h2>CONTROLES</h2><p>"+mostrarControles()+"</p>";
divInstrucciones.innerHTML="<h2>INTRUCCIONES</h2>"+mostrarInstrucciones()+"</p>";
var juego=new Juego();
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    juego.Ejecutar(cadenaComandos.value);
    divResultado.innerHTML=cadenaComandos.value;
  });
