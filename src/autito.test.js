import {mostrarInstrucciones, mostrarControles} from "./mensajes.js";
import Auto from "./autito.js"
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
  it("deberia girar el auto a la derecha", () => {
    var auto = new Auto();
    auto.girarDerecha();
    expect(auto.getOrientacion()).toEqual("E");
    auto.girarDerecha();
    expect(auto.getOrientacion()).toEqual("S");
    auto.girarDerecha();
    expect(auto.getOrientacion()).toEqual("O");
    auto.girarDerecha();
    expect(auto.getOrientacion()).toEqual("N");
  });
  it("deberia ejecutar el comando D", () => {
    var auto = new Auto();
    auto.Ejecutar("D");
    expect(auto.getOrientacion()).toEqual("E");
    auto.Ejecutar("DD");
    expect(auto.getOrientacion()).toEqual("O");
  });
  it("deberia girar el auto a la izquierda", () => {
    var auto = new Auto();
    auto.girarIzquierda();
    expect(auto.getOrientacion()).toEqual("O");
    auto.girarIzquierda();
    expect(auto.getOrientacion()).toEqual("S");
    auto.girarIzquierda();
    expect(auto.getOrientacion()).toEqual("E");
    auto.girarIzquierda();
    expect(auto.getOrientacion()).toEqual("N");
  });
  it("deberia ejecutar el comando I", () => {
    var auto = new Auto();
    auto.Ejecutar("I");
    expect(auto.getOrientacion()).toEqual("O");
    auto.Ejecutar("III");
    expect(auto.getOrientacion()).toEqual("N");
  });
});
