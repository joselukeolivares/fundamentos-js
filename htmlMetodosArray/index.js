console.log("hola mundo")

//document.write("Hola JS bienvenido a HTML")

var articulos=[
    {nombre:"Bici",costo:3000},
    {nombre:"TV",costo:2500},
    {nombre:"Libro",costo:320},
    {nombre:"Celular",costo:8000},
    {nombre:"laptop",costo:20000},
    {nombre:"teclado",costo:500},
    {nombre:"Pantalla 4k gaming",costo:15000}
]

//filter
var articulosFiltrados=articulos.filter(function(artiulo){
    //Primero será la BICI
    //Segundo la TV
    //ETC
    return artiulo.costo<10000 //Si se cumple, se guardará en articulosFiltrados
})

//console.log(articulosFiltrados)

//forEarch
articulosFiltrados.forEach(function(articulofiltrado){
    //document.writeln(articulofiltrado.nombre +" "+articulofiltrado.costo)
    console.log(articulofiltrado.nombre +" "+articulofiltrado.costo)
})

//map
var articulosDto=articulosFiltrados.map(function(articuloObj){
    return articuloObj.costo=articuloObj.costo*.9
})

console.log(articulosDto)

//Some regresa True or False si algun elemento comple la condicion
var articulosBaratos=articulosFiltrados.some(function(articuloBarato){
    return articuloBarato.costo<700
})

console.log("Hay un articulo cuando menos barato en la lista de filtrados?")
console.log(articulosBaratos)

//Every regresa True or False si algun elemento comple la condicion
var articulosBaratos=articulosFiltrados.every(function(articuloBarato){
    return articuloBarato.costo<700
})

console.log("Todos los articulos en la lista de filtrados son baratos?")
console.log(articulosBaratos)

//Reduce para calcular el costo total de todos los articulos con descuento
var costoTotal=articulosDto.reduce(function(articuloTotal,acumulado){
    console.log(articuloTotal.costo)
    console.log(acumulado)
    return articuloTotal.costo+acumulado
},0)

console.log(costoTotal)




