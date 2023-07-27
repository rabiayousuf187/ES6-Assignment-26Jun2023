function ques1() {
    // Create an array called `fruits` with some fruit names
    const fruits = ['apple', 'banana', 'orange', 'kiwi'];

    // Use a `for...of` loop to iterate over the array and log each fruit name
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

function ques2() {
    function logCharacters(message) {
        /**
         * This function takes a string as input and logs each character using a for...of loop.
         * 
         * @param {string} message - The input string
         */

        try {
            // Check if the input is a string
            if (typeof message !== 'string') {
                throw new TypeError('Input must be a string');
            }

            // Iterate over each character of the string using a for...of loop
            for (let char of message) {
                console.log(char);
            }
        } catch (error) {
            // Log and handle any errors
            console.error('Error:', error.message);
        }
    }

    // Example usage
    const message = 'Hello, world!';
    console.log(`Actual Text is: ${message}`);
    logCharacters(message);
}

function ques3() {
    // Create an object called `person` with properties like `name`, `age`, and `country`.
    const person = {
        name: 'John',
        age: 25,
        country: 'USA'
    };

    // Use a `for...of` loop to iterate over the object and log each property value.
    for (const property of Object.values(person)) {
        console.log(property);
    }
}

function ques5() {
    // Create a Set called `colors` with some color names
    const colors = new Set(['red', 'green', 'blue']);

    // Use a `for...of` loop to iterate over the Set and log each color
    for (const color of colors) {
        console.log(color);
    }
}

function ques6() {
    // Step 1: Create an empty array
    const myArray = [];

    // Step 2: Run a loop 10 times, adding new incrementing values to the array
    for (let x = 1; x <= 10; x++) {
        myArray.push(x);
    }

    // Step 3: Log the array into the console
    console.log("Array contents:", myArray);

    // Step 4: Use the for loop to iterate through the array and output its contents
    console.log(`Using "for" loop:`);
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }


    // Step 5: Use the for of loop to output the values from the array
    console.log(`Using "for of" loop:`);
    for (const value of myArray) {
        console.log(value);
    }
}