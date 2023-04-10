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
describe("Girar el auto", () => {
  it("deberia girar el auto a la derecha", () => {
    var auto = new Auto();
    auto.girarADerecha();
    expect(auto.getOrientacion()).toEqual("E");
    auto.girarADerecha();
    expect(auto.getOrientacion()).toEqual("S");
    auto.girarADerecha();
    expect(auto.getOrientacion()).toEqual("O");
    auto.girarADerecha();
    expect(auto.getOrientacion()).toEqual("N");
  });
  it("deberia girar el auto a la izquierda", () => {
    var auto = new Auto();
    auto.girarAIzquierda();
    expect(auto.getOrientacion()).toEqual("O");
    auto.girarAIzquierda();
    expect(auto.getOrientacion()).toEqual("S");
    auto.girarAIzquierda();
    expect(auto.getOrientacion()).toEqual("E");
    auto.girarAIzquierda();
    expect(auto.getOrientacion()).toEqual("N");
  });
});
describe("Avanzar el auto", () => {
  it("el auto deberia avanzar con direccion al norte",()=>{
    var auto = new Auto();
    auto.avanzar();
    expect(auto.getPosicionX()).toEqual(0);
    expect(auto.getPosicionY()).toEqual(1);
    expect(auto.getOrientacion()).toEqual("N");
  });
  it("el auto deberia avanzar con direccion al este",()=>{
    var auto = new Auto();
    auto.girarADerecha();
    auto.avanzar();
    expect(auto.getPosicionX()).toEqual(1);
    expect(auto.getPosicionY()).toEqual(0);
    expect(auto.getOrientacion()).toEqual("E");
  });
  it("el auto deberia avanzar con direccion al sur",()=>{
    var auto = new Auto();
    auto.avanzar();
    auto.avanzar();
    auto.avanzar();
    auto.girarADerecha();
    auto.girarADerecha();
    auto.avanzar();
    expect(auto.getPosicionX()).toEqual(0);
    expect(auto.getPosicionY()).toEqual(2);
    expect(auto.getOrientacion()).toEqual("S");
  });
  it("el auto deberia avanzar con direccion al oeste",()=>{
    var auto = new Auto();
    auto.girarADerecha();
    auto.avanzar();
    auto.avanzar();
    auto.avanzar();
    auto.girarAIzquierda();
    auto.girarAIzquierda();
    auto.avanzar();
    expect(auto.getPosicionX()).toEqual(2);
    expect(auto.getPosicionY()).toEqual(0);
    expect(auto.getOrientacion()).toEqual("O");
  });
  it("El auto no debe salir del tablero al avanzar al norte",()=>{
    var auto=new Auto();
    for(var i=0;i<=10;i++)
    {
      auto.avanzar();
    }
    expect(auto.getPosicionX()).toEqual(0);
    expect(auto.getPosicionY()).toEqual(9);
    expect(auto.getOrientacion()).toEqual("N");
  });
  it("El auto no debe salir del tablero al avanzar al este",()=>{
    var auto=new Auto();
    auto.girarADerecha();
    for(var i=0;i<=10;i++)
    {
      auto.avanzar();
    }
    expect(auto.getPosicionX()).toEqual(9);
    expect(auto.getPosicionY()).toEqual(0);
    expect(auto.getOrientacion()).toEqual("E");
  });
  it("El auto no debe salir del tablero al avanzar al sur",()=>{
    var auto=new Auto();
    auto.girarADerecha();
    auto.girarADerecha();
    auto.avanzar()
    expect(auto.getPosicionX()).toEqual(0);
    expect(auto.getPosicionY()).toEqual(0);
    expect(auto.getOrientacion()).toEqual("S");
  });
});
describe("Ejecutar Comandos", () => {
  it("con comandos vacío, deberia devolver la posicion inicial",()=>{
    var auto= new Auto();
    auto.Ejecutar("");
    expect(auto.getPosicionX()). toEqual(0);
    expect(auto.getPosicionY()). toEqual(0);
    expect(auto.getOrientacion()). toEqual("N");
  })
  it("deberia ejecutar el comando D", () => {
    var auto = new Auto();
    auto.Ejecutar("D");
    expect(auto.getOrientacion()).toEqual("E");
    auto.Ejecutar("DD");
    expect(auto.getOrientacion()).toEqual("O");
  });
  it("deberia ejecutar el comando I", () => {
    var auto = new Auto();
    auto.Ejecutar("I");
    expect(auto.getOrientacion()).toEqual("O");
    auto.Ejecutar("III");
    expect(auto.getOrientacion()).toEqual("N");
  });
});
