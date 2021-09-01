function DescargarClientes(){

    return new Promise(resolve=>{
        console.log("Descargando clientes...")
        setTimeout(() => { // En 1 segundo se lanza la funcion
            resolve("Descarga completa");
            }, 5000);
            
    })
}

function DescargarPedidos(){

    return new Promise(resolve=>{
        console.log("Descargando pedidos...")
        setTimeout(() => { // En 1 segundo se lanza la funcion
            resolve("Descarga completa");
            }, 3000);
            
    })
}

async function app(){
    try{
        /*const clientes = await DescargarClientes();
        const pedidos = await DescargarPedidos();
        console.log(resultado);*/
        const resultado = await Promise.all(DescargarClientes(),DescargarPedidos());
        console.log(resultado[0]);
        console.log(resultado[1]);
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