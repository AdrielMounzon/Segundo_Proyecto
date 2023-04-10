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
    Ejecutar(CadenaDeComandos){
        if(CadenaDeComandos.length>0)
        {
            for(var posicion=0;posicion<CadenaDeComandos.length; posicion++)
            {
                var comando=CadenaDeComandos[posicion];
                if(comando==="D")
                {
                    this.auto.girarADerecha();
                }
                if(comando==="I")
                {
                    this.auto.girarAIzquierda();
                }
                if(comando=="A")
                {
                    this.auto.avanzar();
                }
            }
        }
    };
}
export default Juego;