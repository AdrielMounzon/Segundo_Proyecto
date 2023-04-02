import mostrarInstrucciones from "./autito.js";

describe("Controlador de autito", () => {
  it("deberia mostrar el mensaje de instrucciones", () => {
    expect(mostrarInstrucciones()).toEqual("<p> Debes configurar el tamaño del tablero, luego debes ingresar la posición incial del auto junto con su orientación, luego puedes introducir un comando para generar el movimiento, se mostrará la posición final del auto y su orientación </p>");
  });
});
