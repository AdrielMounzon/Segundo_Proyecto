import {mostrarInstrucciones, mostrarControles} from "./mensajes.js";
import Auto from "./autito.js"
import Juego from "./juego.js";
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
    var juego=new Juego();
    juego.avanzarAuto();
    expect(juego.getAuto().getPosicionX()).toEqual(0);
    expect(juego.getAuto().getPosicionY()).toEqual(1);
    expect(juego.getAuto().getOrientacion()).toEqual("N");
  });
  it("el auto deberia avanzar con direccion al este",()=>{
    var juego=new Juego();
    juego.getAuto().girarADerecha();
    juego.avanzarAuto();;
    expect(juego.getAuto().getPosicionX()).toEqual(1);
    expect(juego.getAuto().getPosicionY()).toEqual(0);
    expect(juego.getAuto().getOrientacion()).toEqual("E");
  });
  it("el auto deberia avanzar con direccion al sur",()=>{
    var juego=new Juego();
    juego.avanzarAuto();
    juego.avanzarAuto();
    juego.avanzarAuto();
    juego.getAuto().girarADerecha();
    juego.getAuto().girarADerecha();
    juego.avanzarAuto();
    expect(juego.getAuto().getPosicionX()).toEqual(0);
    expect(juego.getAuto().getPosicionY()).toEqual(2);
    expect(juego.getAuto().getOrientacion()).toEqual("S");
  });
  it("el auto deberia avanzar con direccion al oeste",()=>{
    var juego=new Juego();
    juego.getAuto().girarADerecha();
    juego.avanzarAuto();
    juego.avanzarAuto();
    juego.avanzarAuto();
    juego.getAuto().girarAIzquierda();
    juego.getAuto().girarAIzquierda();
    juego.avanzarAuto();
    expect(juego.getAuto().getPosicionX()).toEqual(2);
    expect(juego.getAuto().getPosicionY()).toEqual(0);
    expect(juego.getAuto().getOrientacion()).toEqual("O");
  });
  it("El auto no debe salir del tablero al avanzar al norte",()=>{
    var juego=new Juego();
    for(var i=0;i<=10;i++)
    {
      juego.avanzarAuto();
    }
    expect(juego.getAuto().getPosicionX()).toEqual(0);
    expect(juego.getAuto().getPosicionY()).toEqual(9);
    expect(juego.getAuto().getOrientacion()).toEqual("N");
  });
  it("El auto no debe salir del tablero al avanzar al este",()=>{
    var juego=new Juego();
    juego.getAuto().girarADerecha();
    for(var i=0;i<=10;i++)
    {
      juego.avanzarAuto();
    }
    expect(juego.getAuto().getPosicionX()).toEqual(9);
    expect(juego.getAuto().getPosicionY()).toEqual(0);
    expect(juego.getAuto().getOrientacion()).toEqual("E");
  });
  it("El auto no debe salir del tablero al avanzar al sur",()=>{
    var juego=new Juego();
    juego.getAuto().girarADerecha();
    juego.getAuto().girarADerecha();
    juego.avanzarAuto();
    expect(juego.getAuto().getPosicionX()).toEqual(0);
    expect(juego.getAuto().getPosicionY()).toEqual(0);
    expect(juego.getAuto().getOrientacion()).toEqual("S");
  });
  it("El auto no debe salir del tablero al avanzar al oeste",()=>{
    var juego=new Juego();
    juego.getAuto().girarAIzquierda();
    juego.avanzarAuto();
    expect(juego.getAuto().getPosicionX()).toEqual(0);
    expect(juego.getAuto().getPosicionY()).toEqual(0);
    expect(juego.getAuto().getOrientacion()).toEqual("O");
  });
});
describe("Ejecutar Comandos", () => {
  it("con comandos vacío, deberia devolver la posicion inicial",()=>{
    var juego= new Juego();
    juego.Ejecutar("");
    expect(juego.getAuto().getPosicionX()). toEqual(0);
    expect(juego.getAuto().getPosicionY()). toEqual(0);
    expect(juego.getAuto().getOrientacion()). toEqual("N");
  })
  it("deberia ejecutar el comando D", () => {
    var juego= new Juego();
    juego.Ejecutar("D");
    expect(juego.getAuto().getOrientacion()).toEqual("E");
    juego.Ejecutar("DD");
    expect(juego.getAuto().getOrientacion()).toEqual("O");
  });
  it("deberia ejecutar el comando I", () => {
    var juego= new Juego();
    juego.Ejecutar("I");
    expect(juego.getAuto().getOrientacion()).toEqual("O");
    juego.Ejecutar("III");
    expect(juego.getAuto().getOrientacion()).toEqual("N");
  });
  it("deberia avanzar con el comando A",()=>{
    var juego= new Juego();
    juego.Ejecutar("A");
    expect(juego.getAuto().getPosicionX()). toEqual(0);
    expect(juego.getAuto().getPosicionY()). toEqual(1);
    expect(juego.getAuto().getOrientacion()). toEqual("N");
    juego.Ejecutar("AAAA");
    expect(juego.getAuto().getPosicionX()). toEqual(0);
    expect(juego.getAuto().getPosicionY()). toEqual(5);
    expect(juego.getAuto().getOrientacion()). toEqual("N");
  });
  it("deberia ejecutar varios comandos",()=>{
    var juego=new Juego();
    juego.Ejecutar("AADAADADDA");
    expect(juego.getAuto().getPosicionX()). toEqual(2);
    expect(juego.getAuto().getPosicionY()). toEqual(2);
    expect(juego.getAuto().getOrientacion()). toEqual("N");
  });
  it("deberia ejecutar comandos de movimiento y definicion de tablero",()=>{
    var juego=new Juego();
    juego.Ejecutar("5,5/AADAADADDA");
    expect(juego.getAuto().getPosicionX()). toEqual(2);
    expect(juego.getAuto().getPosicionY()). toEqual(2);
    expect(juego.getAuto().getOrientacion()). toEqual("N");
  });
  it("deberia ejecutar comandos de movimiento y definicion de tablero",()=>{
    var juego=new Juego();
    juego.Ejecutar("5,5/AADAADADDA");
    expect(juego.PosicionFinal()). toEqual("2,2N");
  });

});
describe("Configuraciones iniciales del juego", ()=>{
  it("deberia establecer el tamaño del tablero",()=>{
    var juego=new Juego();
    juego.DefinirTablero(5,5);
    expect(juego.getLimiteX()).toEqual(5);
    expect(juego.getLimiteY()).toEqual(5);
  });
  it("deberia establecer la posicion inicial de auto",()=>{
    var juego=new Juego();
    juego.DefinirPosicionInicialDelAuto(1,2,"S");
    expect(juego.getAuto().getPosicionX()).toEqual(1);
    expect(juego.getAuto().getPosicionY()).toEqual(2);
    expect(juego.getAuto().getOrientacion()).toEqual("S");
  });
});
