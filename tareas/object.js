var objeto={} //sintaxys literal para crear un objeto

var coche={
    marca:"Toyota",
    modelo:"Corolla",
    annio:2020,
    detalleDelAuto:function(){
        return `Auto ${this.modelo} ${this.annio}`
      //return "Auto "+this.modelo
    }    
}

function CocheFactory(marca,modelo,annio){
    this.marca=marca
    this.modelo=modelo
    this.annio=annio    
}

var coche1=new CocheFactory("Volksvagen","Jetta","2000")

var marcas=["Toyota","Volksvagen","Ford"]
var annios=[2021,2022,2023,2024]

function CocheFactoryAleatorio(marca,annio){
    this.marca=marca    
    this.annio=annio    
}

for(var i=1;i<=100;i++){
    var marca=marcas[(Math.random()*2).toFixed(0)]
    var annio=annios[(Math.random()*3).toFixed(0)]
    var cocheAleatorio=new CocheFactoryAleatorio(marca,annio)
    console.log(`${cocheAleatorio.marca}    ${cocheAleatorio.annio}`)
}

