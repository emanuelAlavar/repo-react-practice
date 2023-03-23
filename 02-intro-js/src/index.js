const nombre = "Emanuel";
const apellido = "Alavar";

const nombreCompleto= nombre +" "+ apellido;
console.log(nombreCompleto)

const nombreCompleto2= `${nombre} ${apellido}`
console.log(nombreCompleto2)

const nombreCompleto3= `${nombre} 
${apellido}`
console.log(nombreCompleto3)

const nombreCompleto4= `${nombre} 
${apellido} tengo ${7*4} años`
console.log(nombreCompleto4)


function getSaludo(){
    return 'Hola mundo cruel'
}
console.log(`Este es un texto: ${getSaludo()}`)


function getSaludo2(nombre){
    return 'Hola mundo cruel, los saluda ' + nombre 
}
console.log(`Este es un texto: ${getSaludo(nombre)}`)
