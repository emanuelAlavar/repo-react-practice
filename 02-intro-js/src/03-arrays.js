//Creacion de un array con nombre arreglo
const arreglo = [1,2,3,4];
console.log(arreglo);

//Creacion de un array con nombre arreglo2 que contiene todos los elementos de arreglo + un 5
let arreglo2=[...arreglo,5]
console.log(arreglo2);

//Creacion de un array con nombre arreglo3 que contiene todos los elementos de arreglo2
//map itera a todos los elementos del array 
//El callback es una funcion que retorna el doble de un numero
const arreglo3=arreglo2.map(function(numero){
    return numero*2;
});
console.log(arreglo3);