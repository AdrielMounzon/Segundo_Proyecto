import sumar from "./autito";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p> Debes configurar el tamaño del tablero, luego debes ingresar la posición incial del auto junto con su orientación, luego puedes introducir un comando para generar el movimiento, se mostrará la posición final del auto y su orientación </p>";
});
