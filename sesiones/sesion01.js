// Sequencia
const num1 = 1
const num2 = 2
const num3 = 3
console.log(num1)
console.log(num2)
console.log(num3)

/* Vemos claramente que el código se ejecuta de arriba a abajo, en
sequencia. Siempre debemos velar por cumplir el principio DRY ("Don't repeat
yourself"). Separamos lo que se mantiene constante de lo que cambia y refactori_
zamos usando un ciclo (loop). Ejecutar el debugger para ver la secuencia
*/
for(let i = 0; i<3; i++){
  console.log(i+1)
}

/* También podría ocurrir que desconozcamos el valor que tendrá una variable
cuando se ejecute el programa. Por ejemplo: si el nombre del usuario es "Marc",
imprimirá el saludo "Hola Caracola", caso contrario, simplemente dirá "Hola"
En estos casos usamos la selección para que la ejecución fluya en el sentido
que determinemos.

*/
let usuarioSaludo = "Marc"
if (usuarioSaludo === "Marc"){
  console.log("Hola Caracola")
} else {
  console.log("Hola")
}

usuarioSaludo = "Joan"
if (usuarioSaludo === "Marc"){
  console.log("Hola Caracola")
} else {
  console.log("Hola")
}
/* Otra manera de alterar la ejecución en sequencia es a través de funciones. Refac_
toricemos los enunciados if/else */

function saludar(nombre){
  if (nombre === "Marc") {
    console.log("Hola Caracola")
  } else {
    console.log("Hola")
  }
}
saludar("Carlos")


// 2. Nullish Coalescing operator
const variable1 = null;
const variable2 = undefined;
const variable3 = 0;
const defaultValue = 'Valor por defecto';
// const result1 = variable1 !== null && variable1 !== undefined ? variable1 : defaultValue;

const result1 = variable1 ?? defaultValue;
const result2 = variable2 ?? defaultValue;
const result3 = variable3 ?? defaultValue;

console.log('Nullish Coalescing 1:', result1);
console.log('Nullish Coalescing 2:', result2);
console.log('Nullish Coalescing 3:', result3);

// 3. Optional chain
const user = {
  id: 1,
  name: 'John Doe',
  address: {
    city: 'New York',
    zipCode: '10001'
  }
};

const zipCode = user.address?.zipCode;
console.log('Zip Code:', zipCode);

// 4. Ternarios
const ageT = 17;
const isAdult = ageT >= 18 ? 'Es adulto' : 'No es adulto';
console.log('Ternario:', isAdult);

// 5. Código Asíncrono
function simulateAsyncAPI(data, callback) {
  setTimeout(() => {
    callback(data);
  }, 1000);
}
const promesa = new Promise((resolve, reject)=>{
  resolve("Todo Ok")
  reject("Error")
})
promesa.then(result =>console.log(result)).catch(error => console.log(error))
async function resolverPromesa(){
  const result = await promesa
  return result
}
console.log(resolverPromesa())
console.log('Inicio de la operación asíncrona...');
simulateAsyncAPI('Resultado de la operación asíncrona', result => {
  console.log('Resultado:', result);
});

// 6. Módulos (No se puede ejecutar en este entorno de ejemplo ya que requiere un entorno con soporte de módulos)

// 7. Spread, rest
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log('Spread:', combinedArray);

function sumNumbers(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log('Rest:', sumNumbers(1, 2, 3, 4, 5));

// 8. Destructuring
const person = { name: 'Alice', age: 30, city: 'London' };

const { name, age } = person;
console.log('Destructuring:', name, age);

// 9. Valores por defecto
function greet(name = 'Usuario') {
  console.log(`Hola, ${name}!`);
}

greet(); // Sin nombre
greet('Bob'); // Con nombre

// 10. Shorthand property names
const username = 'Jane';
const ageValue = 25;

const userObject = { username: username, ageValue }; // las dos opciones son equivalentes, la segunda es un atajo
console.log('Shorthand property names:', userObject);

// 11. Template literals
const firstName = 'John';
const lastName = 'Doe';
const greeting = `Hola, mi nombre es ${firstName} ${lastName}.`;
console.log('Template literals:', greeting);
