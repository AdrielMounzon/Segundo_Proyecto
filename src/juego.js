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
    DefinirTablero(limitex, limitey){
        this.LimiteX=limitex;
        this.LimiteY=limitey;
    }
}
export default Juego;