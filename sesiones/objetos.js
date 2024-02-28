// Ejemplos de objetos y sus métodos más usados en JavaScript

// Creación de objetos

// Objeto literal
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
  };
  
  // Objeto mediante la función constructora Object
  const car = new Object();
  car.make = 'Toyota';
  car.model = 'Corolla';
  car.year = 2022;
  
  // Métodos más usados en objetos
  
  // Object.keys(objeto) - Devuelve un array con las claves del objeto
  const keys = Object.keys(person);
  console.log('Claves del objeto person:', keys);
  
  // Object.values(objeto) - Devuelve un array con los valores del objeto
  const values = Object.values(car);
  console.log('Valores del objeto car:', values);
  
  // Object.entries(objeto) - Devuelve un array de arrays con las claves y valores del objeto
  const entries = Object.entries(person);
  console.log('Entries del objeto person:', entries);
  
  // Object.assign(objetoDestino, objetoFuente) - Copia las propiedades de un objeto en otro objeto
  const destination = {};
  Object.assign(destination, person);
  console.log('Objeto copiado:', destination);
  // También se puede hacer usando el rest operator
  const destinationRest = {...person}
  console.log('Objeto copiado:', destinationRest);

  // Object.freeze(objeto) - Congela un objeto, impidiendo modificar sus propiedades
  Object.freeze(car);
  car.year = 2023; // No se realizará ningún cambio
  console.log('Objeto car después de intentar modificarlo:', car);
  
  // Object.seal(objeto) - Sella un objeto, permitiendo modificar sus propiedades existentes pero no añadir o eliminar
  Object.seal(person);
  person.name = 'Jane Doe'; // Modificación permitida
  person.gender = 'Female'; // No se añadirá la nueva propiedad
  delete person.age; // No se eliminará la propiedad age
  console.log('Objeto person después de intentar modificarlo:', person);
  
  // Object.hasOwnProperty(propiedad) - Comprueba si un objeto tiene una propiedad específica
  const hasCityProperty = person.hasOwnProperty('city');
  console.log('¿El objeto person tiene la propiedad "city"?', hasCityProperty);
  
  // JSON.stringify() - Devuelve una representación en cadena del objeto
  const carString = JSON.stringify(car)
  console.log(carString)
  console.log('Representación en cadena del objeto car:', carString);
  