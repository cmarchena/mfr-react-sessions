// Ejemplos de diferentes tipos de JavaScript

// Números
const age = 30;
const pi = 3.14;

// Cadenas de texto
const message = 'Hola, ¿cómo estás?';
const firstName = 'John';
const lastName = 'Doe';

// Booleanos
const isTrue = true;
const isFalse = false;

// Arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];

// Objetos
const person = {
  name: 'Alice',
  age: 25,
  city: 'London',
};

// Funciones
function add(a, b) {
  return a + b;
}

const multiply = function (x, y) {
  return x * y;
};

// Arrow Functions
const divide = (numerator, denominator) => numerator / denominator;

// Undefined y null
let undefinedVar;
const nullVar = null;

// Tipos introducidos en ES6. Los veremos con más detalle más adelante

// Symbol


const symbol1 = Symbol();
const symbol2 = Symbol();
const idSymbol = Symbol('id');

const user = {
  name: 'John',
  [idSymbol]: 12345 // Propiedad privada con símbolo como clave
};



// Map
const numberMap = new Map();
numberMap.set('one', 1);
numberMap.set('two', 2);

// Set
const numberSet = new Set([1, 2, 3, 4, 5]);



// Ejecutando las funciones
console.log('Número:', age);
console.log('Cadena de texto:', message);
console.log('Es verdadero:', isTrue);
console.log('Es falso:', isFalse);
console.log('Array de números:', numbers);
console.log('Objeto persona:', person);
console.log('Resultado suma:', add(5, 3));
console.log('Resultado multiplicación:', multiply(4, 6));
console.log('Resultado división:', divide(10, 2));
console.log('Variable indefinida:', undefinedVar);
console.log('Variable nula:', nullVar);
console.log('Symbol:', idSymbol);
console.log(symbol1); // Symbol()
console.log(symbol2); // Symbol()
console.log(symbol1 === symbol2); // false (Los símbolos son únicos)
console.log(user.name); // John
console.log(user[idSymbol]); // 12345
console.log(Object.keys(user)); // ['name']
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]
console.log('Map:', numberMap);
console.log('Set:', numberSet);

