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
  
}