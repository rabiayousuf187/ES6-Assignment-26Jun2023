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
