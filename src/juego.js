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
    SeEncuentraDentroDelLimite()
    {
        var orientacion=this.auto.getOrientacion();

        if(orientacion=="N"&&this.auto.getPosicionY()<this.LimiteY-1)
        {
            return true;
        }
        if(orientacion=="E"&&this.auto.getPosicionX()<this.LimiteX-1)
        {
            return true;
        }
        if(orientacion=="S"&&this.auto.getPosicionY()>0)
        {
            return true;
        }
        if(orientacion=="O"&&this.auto.getPosicionX()>0)
        {
            return true;
        }
        return false;
    }

    avanzarAuto(){
        if(this.SeEncuentraDentroDelLimite())
        {
            this.auto.avanzar();
        }
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
                    this.avanzarAuto();
                }
            }
        }
    };
}
export default Juego;