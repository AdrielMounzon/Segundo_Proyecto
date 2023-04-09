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
    girarDerecha(){
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
    girarIzquierda(){
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
    Ejecutar(CadenaDeComandos){
        if(CadenaDeComandos.length>0)
        {
            for(var posicion=0;posicion<CadenaDeComandos.length; posicion++)
            {
                var comando=CadenaDeComandos[posicion];
                if(comando==="D")
                {
                    this.girarDerecha();
                }
            }
        }
    };
}
export default Auto;