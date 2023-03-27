//Array personajes de tres elementos 
const personajes =["goku","vegeta","gohan"];
//console.log(personajes[0])
//console.log(personajes[1])
//console.log(personajes[2])

//Desestructuracion de un array
const [p1,p2,p3]=personajes;
console.log(p1,p2,p3);

//Si solo necesitamos un elemento en especifico colocamos la coma y espacios vacios
const [, ,per3]=personajes;
console.log(per3);

const retornaArreglo = () =>{
    return ["abc",123]; 
}

//Desestructuracion del arreglo
//Imprimo el segundo elemento del arreglo (123)
const [a,b]=retornaArreglo();
console.log(b);

//Tarea
const useState = (valor) =>{ 
    return [valor,()=>{console.log("Hola mundo")}];
}

//Desestructuro el array e imprimo sus propiedades a gusto y piachere
const [nombre,setNombre]=useState("Goku");
console.log(nombre);
setNombre();
