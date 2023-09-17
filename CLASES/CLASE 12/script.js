// CONDICIONALES
// Evaluamos una situacion y segun su resultado , si se cumple o no esa condicion o situacion, hago una accion o no


//    if/else ->  si/no

//ESTRUCTURA
/* if(condicion){
    accion/es a realizar si se cumple la condicion
}else{
    accion/es a realizar si NO se cumple
}
*/

//ejemplo= si es temprano, duermo un poco, sino me levanto
let horario=9
//  9  < 11 -> true
if(horario < 11){
    //alert("entramos en el if")
    console.log("puedo dormir un poco mas..")
}else{
    //alert("entramos en el else")
    console.log("arriba que se hace tarde!")
}

// entradas de peliculas -> si era mayor de edad o si venia con un chaperon
let edad=17;
let chaperon=false;

if(edad>=16 || chaperon==true){
    console.log("Le vendo la entrada")
}else{
    console.log("No le puedo vender la entrada")
}

//switch
