function ques1() {
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

function ques2() {
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

function ques3() {
    // Create an object called `calculator`
    const calculator = {
        value: 0,

        // Method to add a number to the value property
        add: function (num) {
            if (typeof num !== 'number') {
                throw new Error('Invalid input. Please provide a number.');
            }
            this.value += num;
        },

        // Method to subtract a number from the value property
        subtract: function (num) {
            if (typeof num !== 'number') {
                throw new Error('Invalid input. Please provide a number.');
            }
            this.value -= num;
        },

        // Method to multiply the value property by a number
        multiply: function (num) {
            if (typeof num !== 'number') {
                throw new Error('Invalid input. Please provide a number.');
            }
            this.value *= num;
        },

        // Method to print the current value
        printValue: function () {
            console.log(`Current value: ${this.value}`);
        }
    };

    // Example usage
    calculator.add(5);
    calculator.subtract(2);
    calculator.multiply(3);
    calculator.printValue(); // Output: Current value: 9
}

function ques4() {
    // Define a class called Book
    class Book {
        constructor(title, author, pages) {
            this.title = title;
            this.author = author;
            this.pages = pages;
        }

        // Define a method called printInfo using the "this" keyword
        printInfo() {
            console.log(`Title: ${this.title}`);
            console.log(`Author: ${this.author}`);
            console.log(`Pages: ${this.pages}`);
        }
    }

    // Create an instance of the Book class
    const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218);

    // Call the printInfo method to log the book's information
    book.printInfo();
}

function ques5() {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        introduce() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    // Example usage
    const person1 = new Person("John", 25);
    person1.introduce(); // Output: Hello, my name is John and I am 25 years old.
}

function ques6() {
    // Define an object called counter
    const counter = {
        count: 0, // Initialize the count property to 0

        // Define the increment method using arrow function and the 'this' keyword
        increment: function () {
            this.count++; // Increment the count property by 1 using 'this' keyword
        },

        // Define the reset method using arrow function and the 'this' keyword
        reset: function () {
            this.count = 0; // Reset the count property to 0 using 'this' keyword
        }
    };

    // Example usage
    console.log(counter.count); // Output: 0

    counter.increment();
    console.log(counter.count); // Output: 1

    counter.reset();
    console.log(counter.count); // Output: 0
}

function ques7(){
    
}