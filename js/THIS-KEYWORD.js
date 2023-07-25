function ques1(){
    // Create an object called person
const person = {
    name: "John",
    greet() {
      // Log a greeting message with the person's name
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  // Call the greet method
  person.greet();
}

function ques2(){
    class Car {
        constructor(brand, speed) {
          this.brand = brand;
          this.speed = speed;
        }
      
        accelerate(value) {
          this.speed += value;
        }
      
        printSpeed() {
          console.log(`Current speed of the ${this.brand} car is ${this.speed} km/h.`);
        }
      }
      
      // Example usage
      const myCar = new Car("Toyota", 60);
      myCar.printSpeed(); // Output: Current speed of the Toyota car is 60 km/h.
      myCar.accelerate(40);
      myCar.printSpeed(); // Output: Current speed of the Toyota car is 100 km/h.
}