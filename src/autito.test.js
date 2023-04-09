import {mostrarInstrucciones, mostrarControles} from "./mensajes.js";
import Auto from "./autito.js"
import Ejecutar from "./EjecutarComandos.js";
describe("Mensajes de autito", () => {
  it("deberia mostrar el mensaje de instrucciones", () => {
    expect(mostrarInstrucciones()).toEqual("Debes configurar el tamaño del tablero, luego debes ingresar la posición incial del auto junto con su orientación, luego puedes introducir un comando para generar el movimiento, se mostrará la posición final del auto y su orientación");
  });

  it("deberia mostrar el mensaje de controles", () => {
    expect(mostrarControles()).toEqual("Puedes girar el autito a la izquierda con la tecla 'I' y hacia la derecha con la tecla 'D', para avanzar usa la tecla 'A'");
  });
});
describe("Movilidad de autito", () => {
  it("con comandos vacío, deberia devolver la posicion inicial",()=>{
    var auto= new Auto();
    auto.Ejecutar("");
    expect(auto.getPosicionX()). toEqual(0);
    expect(auto.getPosicionY()). toEqual(0);
    expect(auto.getOrientacion()). toEqual("N");
  })
});
