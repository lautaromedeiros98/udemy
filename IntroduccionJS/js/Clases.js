class Perro{

    constructor(nombre,raza){
        this.nombre=nombre;
        this.raza=raza; 
    }

    ToString(){
        return this.nombre +" "+this.raza;
    }

}

const perrito = new Perro("Chorlito","Dogo");