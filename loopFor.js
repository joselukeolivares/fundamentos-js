
var arreglo=["Jair","Jorge","Jaqueline","Armando","Daniel"]
           //0,    ,1      ,2           ,3      ,4

function saludar(estudiante){
    console.log("Bienvenido(a) "+estudiante)
}


for(var i=2;i<arreglo.length;i++){
    var estudiante=arreglo[i]
    saludar(estudiante)
}


for(var estudiante of arreglo){
       saludar(estudiante)
}

