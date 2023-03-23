const persona = {
    nombre:'Emanuel',
    apellido:'Alavar',
    edad:45,
    direccion:{
        ciudad: 'New York',
        cp:49212,
        latitud:14.3232,
        longitud:35.987
    }
};

console.log(persona);
console.log(persona.edad);
console.table(persona);

//Clonar objeto persona
const persona2 = {...persona};
//Modifico una propiedad de persona2
persona2.nombre = "Brian";
console.log(persona2.nombre);
