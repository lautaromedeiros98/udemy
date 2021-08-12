//Objeto litera, hardcodeado
const empleado = {
    nombre : "Raul",
    apellido : "Mendez"
}



//Objetos dinamicos
function Empleado(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const empleado9 = new Empleado();