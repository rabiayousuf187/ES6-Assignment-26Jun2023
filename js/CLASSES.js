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
  class Rectangle {
    /**
     * Represents a rectangle with a width and a height.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     */
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    /**
     * Calculates and returns the area of the rectangle.
     * @returns {number} The area of the rectangle.
     */
    calculateArea() {
      return this.width * this.height;
    }
  
    /**
     * Calculates and returns the perimeter of the rectangle.
     * @returns {number} The perimeter of the rectangle.
     */
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Example usage:
  const rectangle = new Rectangle(5, 10);
  console.log("Area of Rectangle: ",rectangle.calculateArea()); // Output: 50
  console.log("Perimeter of Rectangle: ",rectangle.calculatePerimeter()); // Output: 30
}

function ques4(){
  class Circle {
    constructor(radius) {
      /**
       * Represents a circle with a given radius.
       * @param {number} radius - The radius of the circle.
       */
      this.radius = radius;
    }
  
    getDiameter() {
      /**
       * Calculates and returns the diameter of the circle.
       * @returns {number} The diameter of the circle.
       */
      return 2 * this.radius;
    }
  
    getCircumference() {
      /**
       * Calculates and returns the circumference of the circle.
       * @returns {number} The circumference of the circle.
       */
      return 2 * Math.PI * this.radius;
    }
  
    getArea() {
      /**
       * Calculates and returns the area of the circle.
       * @returns {number} The area of the circle.
       */
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Example usage:
  const circle = new Circle(5);
  console.log("Diameter of Circle: ",circle.getDiameter()); // Output: 10
  console.log("Circumference of Circle: ",circle.getCircumference()); // Output: 31.41592653589793
  console.log("Area of Circle: ",circle.getArea()); // Output: 78.53981633974483
}

function ques5(){
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduction() {
      return `My name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, course) {
      super(name, age);
      this.course = course;
    }
  
    introduction() {
      return `${super.introduction()} I am studying ${this.course}.`;
    }
  }
  
  // Example usage
  const student = new Student("John", 20, "Computer Science");
  console.log(student.introduction()); // Output: "My name is John and I am 20 years old. I am studying Computer Science."
}