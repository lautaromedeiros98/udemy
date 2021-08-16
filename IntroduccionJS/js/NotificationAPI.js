const boton = document.querySelector("#boton");
boton.addEventListener("click",function(){
    Notification.requestPermission().then(resultado => alert("El resultado es "+resultado));
});
if(Notification.permission == "granted"){
    new Notification("Esto es una notificacion",{
        icon: "primer_proyecto/freelancer_inicio/hero.jpg",
        body: "Codigo de lauti"
    })
}