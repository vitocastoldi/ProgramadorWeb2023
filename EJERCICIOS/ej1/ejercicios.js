/* Crear una variable nombre y otra apellido . Renombrarlas y mostar el resultado por consola*/


/* 
let nombre="Vito"
let apellido="Castoldi"

console.log(nombre +" "+apellido)

nombre="Mechi"
apellido="Fernandez"
console.log(nombre+" "+apellido)
*/

/* Maria tiene una casa de sanitarios y quiere saber el precio total de los 5 productos que lleva un cliente, usar un bucle para sacar el total del precio . */ 
/*
const preciosProductos = [10,15,20,25,30];

let precioTotal=0;

for(let i=0;i < preciosProductos.length; i++){
    precioTotal+=preciosProductos[i];
}
console.log("El precio total de los productos es de: $" + precioTotal);
 */

/* EJERCICO DE CONDICIONALES 
1- CREAR UN ARRAY de numeros y usando if/else indicar si son pares o impares por consola. */
/* 
let numeros=[1,2,4,6,43,7,8,3,15];
let numero=0;

for (let i=0;i<numeros.length;i++){
    numero=numeros[i];

    if(numero %2===0){
        console.log("El numero ",numeros[i]," es par");
    }else{
            console.log("El numero ",numeros[i]," es impar")
        }
}
*/
/*CREAR UNA VARIABLE CON UNA NOTA (que puede valer del 1 al 10)y por medio de un if/else mostrar por consola:
"Sobresaliente" si es un 9 o 10
"Notable" si es un 8
"Bien"si el valor es 7
"Suficiente" si el valor es 6
"Insuficiente" si el valor es entre 1/5 */

let nota=9

if(nota>=9 & nota==10){
    console.log("Sobresaliente");
}else if(nota===8){
    console.log("Notable");
}else if(nota===7){
    console.log("Bien");
}else if(nota===6){
    console.log("Suficiente");
}else(nota<=5)
    console.log("Insuficiente");


/*Marcelo esta armando una lista para el super.Crear un bucle para que marcelo pueda ingresar los productos que necesite y muestre por consola la lista completa. */

let
