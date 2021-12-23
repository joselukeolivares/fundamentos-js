var colaboradores=["Jair","Jorge","Armando","Daniel","Jaquiline"]

while(colaboradores.length>0){
    var colaborador=colaboradores.shift()
    saludar(colaborador)

}

function saludar(nombre){
    console.log("Hola buen dia "+nombre)
}

