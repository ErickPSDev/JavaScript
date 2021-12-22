/* 1 - Crea una variable llamada fruta y asígnale el valor Manzana.*/
let fruta = "Manzana";

/* 2 - Crea una variable llamada c, ahora asígnale el valor 50.*/
let c;
c = 50;

// 3 - Muestra la suma de 3 + 10, utilizando dos variables: x , y.
const x = 3, y = 10;
let suma = x + y;
console.log(suma);

// 4 - Crea una variable llamada z, ahora asígnale x + y. Después muestra el resultado en consola.
let z = "x + y";
console.log(z);


/* 5 - En una sola línea declara tres variables con los siguientes nombres y valores:

primerNombre | "David"
apellido | "Mendoza"
edad | 26 */

let primerNombre = "David", apellido = "Mendoza", edad = 26 ;

// 6 - Crea dos variables, asígnales valores númericos, multiplícalas entre sí y muestra el resultado en consola.

let x = 1, y = 2;
console.log(x * y);

// 7 - Muestra en consola el residuo de dividir 13 y 7.

console.log(13 % 7);

// 8 - Crea una variable cuyo valor sea 15 y otra 5, utiliza el operador de asignación adecuado para añadirle a la primera variable el valor 20 (pista: es la forma simplificada de a = a + b).

var a = 15, b = 5;
a += b;

// 9 - Crea una variable cuyo valor sea 10 y otra 3, utiliza el operador de asignación adecuado para añadirle a la primera variable el valor 30.
var a = 10, b = 3;
a *= b;

// 10 - Teniendo una variable que vale 10 y otra 8, muestra en consola si es verdad que la primera variable vale más que la segunda.
let a = 10, b = 8;
if (a>b) {console.log("La primera variable es mayor que la segunda");}


// 11 - Teniendo una variable que vale 24 y otra 24, muestra en consola si es verdad que la primera y segunda variable valen lo mismo.
let a = 24, b = 24;
if (a===b) {console.log("Es verdad que la primera y segunda variable valen lo mismo");}


// 12 - Teniendo una variable que vale 7 y otra 3, muestra en consola si es verdad que la primera no vale lo mismo que la segunda variable.
let a = 7, b = 3;
if (a!==b) {console.log("Es verdad que la primera no vale lo mismo que la segunda variable.");}

// 13 - Completa el siguiente código y explica que es lo que realiza.
let x = 10, y = 2; // asignación de valores a variables, para poder ser evaluadas
if (x>y) { // Evaluación de variables en base a su valor, derivando en un resultado boleano.
    console.log('Hola Koder') // al ser verdadero el resultado, se imprime en pantalla el string, dado que es el camino default.
}

// 14 - Completa el siguiente código y explica que es lo que realiza.
let x = 10, y = 10;// asignación de valores a variables, para poder ser evaluadas
if (x=>y){// Evaluación de variables en base a su valor, derivando en un resultado boleano
    console.log('Manzanas') //al ser verdadero el resultado, se imprime en pantalla el string, dado que es el camino default.
}
else{
    console.log('Peras') // en caso contrario, se imprimiera en pantalla "Peras"
}

