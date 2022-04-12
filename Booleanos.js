var booleano1 = true;
var booleano2 = false;

/* const booleanoAnd */
var booleanoAnd = booleano1 == booleano2;
console.log(booleanoAnd);

var booleanoOr = booleano1 || booleano2;

var booleanoNot = booleano1 != booleano2;

/* Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2) */

var booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

const valorDivisión = 17 / 3;
console.log(valorDivisión.toFixed(2));

const valorResto = 17 / 7;
console.log(valorResto.toFixed(2));

var A = 9;
var B = "9";
console.log(A == B);
console.log(A === B);

/* Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila” */

let mochilla = [];

if (mochilla > 10) {
  console.log("No puedo cargar con tantas cosas");
} else if (mochilla > 2 && mochilla < 10) {
  console.log("Que bien voy con mi mochila");
} else {
  console.log("Creo q no necesito una mochila");
}
console.log(mochilla);

/* Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10 */

var contarHasta10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < contarHasta10.length; i++);
console.log(contarHasta10);

/* Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’ */

let diaFestivo = true;

if (diaFestivo == true) {
  console.log("Hoy trabajo");
} else {
  console.log("Hoy no trabajo");
}

/* Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle */
const number = 19;
let arrayBucle = [];

for (let i = 4; i < number; i++) {
  arrayBucle.push(i);
}
console.log(arrayBucle);

/* Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado */
let sum = 0;
for (let i = 0; i < arrayBucle.length; i++) {
  sum += arrayBucle[i];
}
console.log(sum);

/* Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos */

const array = ["Con", "Sofia", "aprendiendo", "bucles"];

let text = "";
for (let x of array) {
  text += x;
}

console.log(array);


text = "";
for (let x in array) {
  text += array[x];
}
console.log(array);

/* Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3 */

let i = 0;

while (i < 21) {
  if (i % 3 === 0) {
    console.log(`patata`);
  }
  i++;
}

/* Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
Nota: Debes de usar el Switch.
0 - 4: Insuficiente.
5 - 6: Suficiente.
7 - 8: Notable.
9 - 10: Sobresaliente. */

var clasificacion = "";
let nota = Math.round(Math.random() * 10);

switch (nota) {
  case 1:
  case 2:
  case 3:
  case 4:
    clasificacion = "Insuficiente.";
    break;
  case 5:
  case 6:    
    clasificacion = "Suficiente.";
    break;
  case 7:
  case 8:  
    clasificacion = "Notable.";
    break;
  case 9:
  case 10:  
    clasificacion = "Sobresaliente.";
    break;

  default:
    clasificacion = "No se mi nota.";
}
console.log(nota);
console.log(clasificacion);


/* same exercise but using else if 
if (nota < 5) {
  clasificacion = "Insuficiente.";
} else if (nota == 5 || nota == 6) {
  clasificacion = "Suficiente.";
} else if (nota == 7 || nota == 8) {
  clasificacion = "Notable.";
} else if (nota == 9 || nota == 10) {
  clasificacion = "Sobresaliente.";
} else {
  clasificacion = "No se mi nota";
}
console.log(nota);
console.log(clasificacion);

/* Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.
 */
function resta(left, right) {
  let subtraction = left - right;
  return subtraction;
}
console.log(resta(6, 1));

/* Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’
 */

function duplicaNumero(num) {
  let double = num * 2;
  return double;
}

console.log(duplicaNumero(6));
