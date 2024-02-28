// Ejemplo de clases en JavaScript

// Definición de una clase "Person"
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Método de instancia
    sayHello() {
      console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
  
    // Método estático
    static sayGreetings() {
      console.log('¡Hola a todos!');
    }
  }
  
  // Creación de objetos a partir de la clase "Person"
  const person1 = new Person('John', 30);
  const person2 = new Person('Alice', 25);
  
  // Llamando a los métodos de instancia
  person1.sayHello(); // Hola, mi nombre es John y tengo 30 años.
  person2.sayHello(); // Hola, mi nombre es Alice y tengo 25 años.
  
  // Llamando al método estático de la clase
  Person.sayGreetings(); // ¡Hola a todos!
  