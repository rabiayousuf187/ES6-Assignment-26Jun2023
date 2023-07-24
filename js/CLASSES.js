function ques1() {
  // Step 1: Create the Person class
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  }
 
  // Step 2: Create instances of friends using the Person class
  const friend1 = new Person("John", "Doe");
  const friend2 = new Person("Jane", "Smith");
  
  // Step 3: Output both friends' names with a greeting
  console.log(`Hello, ${friend1.firstname} ${friend1.lastname}!`);
  console.log(`Hello, ${friend2.firstname} ${friend2.lastname}!`);
}

function ques2(){
  class Person {
    constructor(name, age) {
      /**
       * Represents a person with a name and an age.
       *
       * @param {string} name - The name of the person.
       * @param {number} age - The age of the person.
       */
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      /**
       * Returns the person's introduction.
       *
       * @returns {string} The person's introduction.
       */
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // Example usage
  const person = new Person("John", 25);
  console.log(person.introduce()); // Output: Hi, my name is John and I am 25 years old.
  
}

function ques3(){
  class AsteriskGenerator {
    constructor() {
      this.asterisk = '*';
    }
  
    generateAsterisks(n) {
      let result = '';
      for (let i = 0; i < n; i++) {
        result += this.asterisk;
      }
      return result;
    }
  }
  
  // Example usage:
  const asteriskGenerator = new AsteriskGenerator();
  const numberOfAsterisks = parseInt(prompt("Enter Number to Print N Times *:"));
  const asterisksString = asteriskGenerator.generateAsterisks(numberOfAsterisks);
  console.log(asterisksString); // Output: "*****"
  
}

function ques4(){
  class GreetingGenerator {
    constructor() {
      this.greetingMessage = '';
    }
  
    generateGreeting(person) {
      this.greetingMessage = `Hello, my name is ${person.name} and I am ${person.age} years old.`;
      return this.greetingMessage;
    }
  }
  
  // Example usage:
  const greetingGenerator = new GreetingGenerator();
  const personInfo = { name: 'John', age: 30 };
  const greetingMessage = greetingGenerator.generateGreeting(personInfo);
  console.log(greetingMessage); // Output: "Hello, my name is John and I am 30 years old."
  
}

function ques5(){
  
}