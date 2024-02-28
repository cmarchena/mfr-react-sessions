// Arrays: reduce, filter, map, find, some, includes, every

const numbers = [1, 2, 3, 4, 5];

// Reduce: Suma de todos los elementos en el array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Suma:', sum);

// Filter: Filtrar números pares
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Números pares:', evenNumbers);

// Map: Duplicar todos los elementos en el array
const doubledNumbers = numbers.map(num => num * 2);
console.log('Duplicados:', doubledNumbers);

// Find: Encontrar el primer número mayor que 3
const firstNumberGreaterThan3 = numbers.find(num => num > 3);
console.log('Primer número mayor que 3:', firstNumberGreaterThan3);

// Some: Comprobar si hay algún número mayor que 5
const hasNumberGreaterThan5 = numbers.some(num => num > 5);
console.log('¿Hay números mayores que 5?', hasNumberGreaterThan5);

// Includes: Comprobar si el array incluye el número 3
const includesNumber3 = numbers.includes(3);
console.log('¿Incluye el número 3?', includesNumber3);

// Every: Comprobar si todos los números son menores que 10
const areAllNumbersLessThan10 = numbers.every(num => num < 10);
console.log('¿Son todos los números menores que 10?', areAllNumbersLessThan10);
