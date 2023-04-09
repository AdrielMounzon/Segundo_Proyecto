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
    Ejecutar(CadenaDeComandos){
    };
}
export default Auto;