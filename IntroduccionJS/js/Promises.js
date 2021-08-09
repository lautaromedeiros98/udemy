const usuarioAutenticado = new Promise((resolve,reject)=>{
    const auth = true;
    if(auth){
        resolve("El usuario existe"); //La promesa se cumple
    }
    else{
        reject("Necesita registrarse");
    }

    usuarioAutenticado.then(function(){
        console.log("Desde el promise")
    })
    .catch(function(error){
        console.log(error)
    })
});