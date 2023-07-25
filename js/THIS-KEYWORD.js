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