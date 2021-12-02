/*Ejercio 1                            */
var bandera=10

if (bandera>1){
    console.log("Es cierto")
    console.log("Terminamos evaluación")
}
/*Ejercio 2                             */
var edad=18

if (edad>=18){
    console.log("Es mayor de edad")
    console.log("Puede votar")
}else{
    console.log("Aún no puedes votar, debes mayor de 18")
}

console.log("Gracias por venir a votar")

/*Ejercio 3                             */
var edad=18
var calcaValida=true

if (edad>=18 && calcaValida){
    console.log("Es mayor de edad")
    console.log("Puedes conducir")
}else if(edad>15){
    console.log("Puedes conducir, con tu permiso especial.Cuidate")
}else{
    console.log("Aún no puedes conducir, debes ser mayor de 18")
}

console.log("Gracias buen viaje")