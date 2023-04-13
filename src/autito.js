class Auto{
    constructor(){
        this.posicionX=0;
        this.posicionY=0;
        this.orientacion="N";
        this.PuntosCardinales=["N","E","S","O"];
    };
    getPosicionX(){
        return this.posicionX;
    };
    getPosicionY(){
        return this.posicionY;
    };
    getOrientacion(){
        return this.orientacion;
    };
    DefinirPosicion(posicionxp,posicionyp,orientacionp){
        this.posicionX=posicionxp;
        this.posicionY=posicionyp;
        this.orientacion=orientacionp;
    }
    girarADerecha(){
        var posicion=this.PuntosCardinales.indexOf(this.getOrientacion());
        if(posicion!=3)
        {
            this.orientacion=this.PuntosCardinales[posicion+1];
        }
        else
        {
            this.orientacion=this.PuntosCardinales[0];
        }
        
    }
    girarAIzquierda(){
        var posicion=this.PuntosCardinales.indexOf(this.getOrientacion());
        if(posicion!=0)
        {
            this.orientacion=this.PuntosCardinales[posicion-1];
        }
        else
        {
            this.orientacion=this.PuntosCardinales[3];
        }
        
    }
    avanzar(){
        if(this.orientacion=="N")
        {
            this.posicionY=this.posicionY+1;
        }
        if(this.orientacion=="E")
        {
            this.posicionX=this.posicionX+1;
        }
        if(this.orientacion=="S")
        {
            this.posicionY=this.posicionY-1;
        }
        if(this. orientacion=="O")
        {
            this.posicionX=this.posicionX-1;
        }
    }
    jump(){
        this.avanzar();
        this.avanzar();
    }
}
export default Auto;