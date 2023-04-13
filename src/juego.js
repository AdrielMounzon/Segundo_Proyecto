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
        else
        {
            if(orientacion=="N"&&this.auto.getPosicionY()==this.LimiteY-1)
            {
                this.auto.posicionY=0;
            }
        }
        if(orientacion=="E"&&this.auto.getPosicionX()<this.LimiteX-1)
        {
            return true;
        }
        else
        {
            if(orientacion=="E"&&this.auto.getPosicionX()==this.LimiteX-1)
            {
                this.auto.posicionX=0;
            }
        }
        if(orientacion=="S"&&this.auto.getPosicionY()>0)
        {
            return true;
        }
        else
        {
            if(orientacion=="S"&&this.auto.getPosicionY()==0)
            {
                this.auto.posicionY=this.LimiteY - 1;
            }
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

    establecerTablero(cadena)
    {
        var partesCadena = cadena.split(",");
        var posicionXTablero = parseInt(partesCadena[0]);
        var posicionYTablero = parseInt(partesCadena[1]);
        this.LimiteX = posicionXTablero;
        this.LimiteY = posicionYTablero;
    }

    establecerPosicionInicial(cadena)
    {
        var partesCadena = cadena.split(",");
        var posicionXAuto = parseInt(partesCadena[0]);
        var posicionYAuto = parseInt(partesCadena[1].slice(0, -1));
        var orientacionAuto = partesCadena[1].slice(-1);
        this.DefinirPosicionInicialDelAuto(posicionXAuto, posicionYAuto, orientacionAuto);
    }

    ejecutarComandosMovimiento(cadena)
    {
        for(var posicion=0;posicion<cadena.length; posicion++)
        {
            var comando=cadena[posicion];
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
            if(comando=="J")
            {
                this.avanzarAuto();
                this.avanzarAuto();
            }
        }
    }

    Ejecutar(cadena){
        if(cadena.length>0)
        {
            var partesCadena = cadena.split("/");
            var regexTablero = /^\d+,\d+$/;
            var regexPosicion = /^\d+,\d+[NSOE]$/;
            var regexMovimiento = /^[AIDJ]+$/;
            for(var parte of partesCadena)
            {
                if (regexTablero.test(parte))
                {
                    this.establecerTablero(parte);
                }
                if (regexPosicion.test(parte))
                {
                    this.establecerPosicionInicial(parte);
                }
                if (regexMovimiento.test(parte))
                {
                    this.ejecutarComandosMovimiento(parte);
                }
            }
        }
    }

    PosicionFinal()
    {
        return this.auto.getPosicionX()+","+this.auto.getPosicionY()+this.auto.getOrientacion();
    }
}
export default Juego;