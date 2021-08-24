function DescargarClientes(){

    return new Promise(resolve=>{
        console.log("Descargando clientes...")
        setTimeout(() => { // En 1 segundo se lanza la funcion
            resolve("Descarga completa");
            }, 5000);
            
    })
}

async function app(){
    try{
        const resultado = await DescargarClientes();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}

app();

/*
setInterval(() => { // Cada 1 segundo se repite la
    console.log("Espere por favor...")
}, 1000);
*/