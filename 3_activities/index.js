// 1 - Crea una función que reciba como parámetro la edad de un perro y permita calcular la edad actual en años humanos del mismo y lo muestre en consola (solicita los parámetros que consideres necesarios por consola).

console.log ("Función que reciba como parámetro la edad de un perro y permita calcular la edad actual en años humanos del mismo y lo muestre en consola");
let edadPerruna = prompt("Por favor introduce a edad de tu perr@");
let edadHumano = 15;
let conversion = edadPerruna * edadHumano;

function calcularEdad (edadPerruna) {
  console.log("La edad de tu perr@ en años humanos es: " + conversion);
}

calcularEdad();

// 2 - Crea una función que reciba por parámetro la edad máxima a la que te gustaría llegar (sin bromas por favor) y el número de tu bocadillo favorito que te gusta comer por día, esta debe regresar por consola cuanta cantidad de ese producto necesitarías para poderlo comer por lo que te resta de vida (solicita los parámetros que consideres necesarios por consola).

console.log ("Función que reciba por parámetro la edad máxima a la que te gustaría llegar y el número de tu bocadillo favorito que te gusta comer por día, esta debe regresar por consola cuanta cantidad de ese producto necesitarías para poderlo comer por lo que te resta de vida");

function bocadillosMax (edadMax, bocadillosDiarios){
  edadMax = prompt("Por favor introduce la edad a la que quisieras llegar a vivir (Sin bromas por favor");

  bocadillosDiarios = prompt("Por favor introduce la cantidad de piezas que te gustaria comer de tu bocadillo al día");

  bocadillos = edadMax * bocadillosDiarios;

  console.log ('La cantidad de bocadillos que necesitas tener es de: ' + bocadillos + ' Piezas, comiendo: ' + bocadillosDiarios  + ' Pieza(s) al dia' + ' para comerlo por los: ' + edadMax + ' Años que deseas vivir.');
}

bocadillosMax();
// 3 - Crea una función que calcule la circunferencia y el área de un círculo (usa funciones anidadas) y regrese por consola los resultados obtenidos (solicita los parámetros que consideres necesarios por consola).

console.log('Función que calcula la circunferencia y el área de un círculo')

function circleCircunference (radio){
   radio = prompt('Por favor introduce el radio del círculo que deseas calcular en centimetros');
   circunference = 2 * Math.PI * radio; 
   console.log ('La circunferencia (longitud) del círculo es de: ' + circunference.toFixed(2) + ' cm');

  function circleArea(radio){
    return radio;
    }
    area = Math.PI * radio**2;
    console.log ('Y el área del círculo es de: ' + area.toFixed(2) + ' cm2');
 
}
console.log (circleCircunference());
// 4 - Crea una función que convierta la temperatura en grados Celsius, Fahrenheit y Kelvin en ese orden y con base en el resultado anterior calcular los siguientes para mostrarlos en consola (funciones anidadas o por separado) (solicita los parámetros que consideres necesarios por consola).

// 5 - Crea una función que con base en la palabra ingresada te diga cuantas vocales tiene en total y desgloce la cantidad por cada vocal de la misma (solicita los parámetros que consideres necesarios por consola).