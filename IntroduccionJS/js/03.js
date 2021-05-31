/*Const: no se pueden iniciarlizar variables const sin un valor asignado, se usa mucho para 
  manejar variables que conserven su valor a lo largo de la ejecucion de la pag/prgorama
  porque los valores no se pueden reasignar
*/

const nombre = "Lautaro";

/* Las const tienen un tipado dinamico */

const nombre33 = 1; 

//Se pueden defender varias variables const a la vez.

const nombre2 = "Lauti", nombre1 = "Gabi";

// Los nombres de las variables le no pueden empezar con un numero pero si pueden contenerlo. 
// Tampoco pueden empezar con ciertos caracteres especiales.

const _variable = false; // En este caso el guion bajo si esta permitido.

// ↓↓ Estilos para las variables const (Buenas practicas) ↓↓

const nombre_producto=1; // unders_core
const nombreProducto=2;  // camelCase
const NombreProducto=3; // Pascal case
const nombreproducto=4; // lowercase

//javascript es Case Sensitive, distingue variables por sus minúsculas y mayúsculas

console.log(nombre);