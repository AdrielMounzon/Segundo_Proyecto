import Auto from "./autito";
class Juego{
    constructor(){
        this.auto=new Auto();
        this.LimiteX=10;
        this.LimiteY=10;
    };
    getLimiteX(){
        return this.LimiteX;
    }
    getLimiteY(){
        return this.LimiteY;
    }
    getAuto(){
        return this.auto;
    }
    DefinirTablero(limitex, limitey){
        this.LimiteX=limitex;
        this.LimiteY=limitey;
    }
    DefinirPosicionInicialDelAuto(posicionx,posiciony,orientacion){
        this.auto.DefinirPosicion(posicionx,posiciony,orientacion);
    }
}
export default Juego;