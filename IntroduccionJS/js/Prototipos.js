//Funciones que solo se utilizan en un objeto en especifico

function Producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
}

Producto.prototype.ToString = function(p){
    console.log("Nombre: "+p.nombre+ ", Precio: "+p.precio);
}

const p1 = new Producto("Pan",30);
p1.ToString();