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
  class StringProcessor {
    constructor(strings) {
      this.strings = strings;
    }
  
    printFirstLetters() {
      for (let i = 0; i < this.strings.length; i++) {
        let firstLetter = this.strings[i].charAt(0);
        console.log(firstLetter);
      }
    }
  }
  
  // Example usage:
  const myStrings = ['apple', 'banana', 'cherry', 'date'];
  const processor = new StringProcessor(myStrings);
  processor.printFirstLetters();
  
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