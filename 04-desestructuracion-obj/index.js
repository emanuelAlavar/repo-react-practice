//Desestructuracion
const persona ={
    nombre:"Tony",
    edad:40,
    clave:"Ironman"
};
//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

const {clave,edad,nombre}=persona;
console.log(edad);
console.log(nombre);
console.log(clave);

//Funcion retorna persona: los parametros pasados son del objeto persona
const retornaPersona=({edad,nombre,clave})=>{
    console.log(edad,nombre,clave);
}
retornaPersona(persona);

//Funcion retorna un objeto tipo persona
const useContext=({clave,edad})=>{
    return {
        nombreClave: clave,
        anios:edad,
        latlong:{
            latitud:12.025,
            longitud:35.258
        }
    }
};
//Usando desestructuracion del objeto para obtener las propiedades especificadas
//En el caso de latlong se esta usando una desestructuracion anidada de objeto
const {nombreClave,anios,latlong:{latitud,longitud}}=useContext(persona)
console.log(nombreClave,anios);
console.log(latitud,longitud)
