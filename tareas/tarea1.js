/*
Vamos a imginar que estamos en la primer tienda Coppel, y que 10 personas son las que 
intentan realizar una compra de contado. Crea dos array con la siguiente información:
1-Lista de nombres de las personas, con longitud 10
2-Este estará vacio pero será donde se registre la venta por cliente, es decir longitud 0 al declararlo e iniciarlizarlo.

Utiliza el ciclo for para recorrer la lista de personas del primer array, el cual contiene la
lista de personas, dentro del bloque del ciclo cada vez que se recorra una posición del array se
realizaran las siguientes acciones:
1-Imprimir mensaje de agradeciemiento por visitarnos, concatenando el nombre la persona
2-Crear una variable que contenga una compra por un monto aleatorio de 1 a 500 pesos (Utiliza la funcion Math.random()*500)
3-Guarda en el segundo array la variable que contenga el monto de compra generado aleatoriamente (utiliza el metodo push para agregar la venta)
4-Finamente imprime un mensaje: "Venta Total de contado $"+venta+". Gracias por comprar en la tienda 1"

En este ejercicio, se utilizará un solo ciclo para recorrer el array de nombres y para guardar las ventas obtenidas, es como si fuese
una cajera que recibe un cliente, lo saluda y calcula la venta, para el primer arreglo requeriremos el indice para obtener los nombres, sin 
embargo para el segundo no es necesario por que vamos solo agregando elementos e imaginando que el segundo arreglo tendrá las ventas de acuerdo al orden 
del primer array, por ejemplo si Daniel esta en la posición 3 del primer array, su venta deberá estar en la posición 3 del segundo array, aunque sea 0.

Si lo deseas puedes practicar aplicando descuentos por algún criterio o calcular la venta total y promedio. Que la fuerza te acompañe....
*/