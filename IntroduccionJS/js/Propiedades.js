const reproductor = {
    ///////////////////////////////
    reproducir : function(id){
        if(id == "l-gante")
        {
            console.log('Reproduciendo "L-GANTE Rkt"');
        }
    }
    //////////////////////////////

    ,// <- Los elementos, funciones, propiedades de un objeto se separan por comas 

    /////////////////////////////
    pausar : function(flag){
        if(flag==true)
        {
            console.log('Reproductor pausado');
        }
    }
    /////////////////////////////
}
let id = "l-gante";
let flag = true;

reproductor.reproducir(id);
reproductor.pausar(flag);

reproductor.play = function(flag){  // Agregando propiedades por fuera del objeto ...
    if(flag==true)
    {
        console.log("Renaudando...");
    }
}

reproductor.play(flag);