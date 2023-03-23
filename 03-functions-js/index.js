//Funcion saludar
function saludr(nombre){
    return `Hola ${nombre}`;
}
console.log(saludr("Joni"));

//Funcion saludar mejorada
const nombre="Ema";
const saludar=function(nombre){
    return `Hola ${nombre}`;
}
console.log(saludar());

//Funcion saludar tipo flecha o callback con parametro
const saludar2 = (nombre)=>`Hola, ${nombre}`;
console.log(saludar2("Ema"));

//Funcion saludar tipo flecha o callback sin parametro
const saludar3 = ()=>`Hola, Brian`;
console.log(saludar3());

//Funcion getUser tipo flecha o callback que retorna un objeto, se omite el return y se utiliza parentesis ()
const getUser=()=>
    ({
        uid:'1324ASF',
        username:'manusovich14'
    })
console.log(getUser())

//Callback que retorna un objeto
const getUsuarioActivo=(nombre)=>
    ({
        uid:'134ASDF',
        username:nombre
    });

const usuarioActivo=getUsuarioActivo('Fernando');
console.log(usuarioActivo)