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
    Ejecutar(CadenaDeComandos){
    };
}
export default Auto;