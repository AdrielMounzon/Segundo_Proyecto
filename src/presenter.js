import {mostrarControles,mostrarInstrucciones } from "./autito";

const divInstrucciones = document.querySelector("#instrucciones-div");
const divControles = document.querySelector("#controles-div");
const form=document.querySelector("#controlador-form");
divControles.innerHTML="<h2>CONTROLES</h2><p>"+mostrarControles()+"</p>";
divInstrucciones.innerHTML="<h2>INTRUCCIONES</h2>"+mostrarInstrucciones()+"</p>";
