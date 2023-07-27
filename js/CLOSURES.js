function ques1() {
    function counter() {
        let count = 0; // The counter variable is within the scope of the outer function

        function incrementAndLog() {
            count++; // Increment the counter
            console.log("Counter value:", count);
        }

        return incrementAndLog;
    }

    // Example of using the counter function to create an incrementing counter
    const incrementCounter = counter();

    // Call the returned function multiple times to see the counter in action
    incrementCounter(); // Output: Counter value: 1
    incrementCounter(); // Output: Counter value: 2
    incrementCounter(); // Output: Counter value: 3

}

function ques2() {
    function createMultiplier(factor) {
        // The factor parameter is within the scope of the outer function

        function multiply(number) {
            return number * factor; // Access the factor parameter using closures
        }

        return multiply;
    }

    // Example of using the createMultiplier function
    const multiplyByTwo = createMultiplier(2);
    console.log(multiplyByTwo(5)); // Output: 10 (5 * 2)

    const multiplyByThree = createMultiplier(3);
    console.log(multiplyByThree(5)); // Output: 15 (5 * 3)

}

function ques3() {
    function secretMessage(message) {
        // The message parameter is within the scope of the outer function

        function logSecret() {
            console.log("Secret Message:", message); // Access the message parameter using closures
        }

        return logSecret;
    }

    // Example of using the secretMessage function
    const secret = secretMessage("Hello, this is a secret!");
    secret(); // Output: Secret Message: Hello, this is a secret!

}

function ques4() {
    function calculate(num1, num2) {
        // The num1 and num2 parameters are within the scope of the outer function

        function add() {
            return num1 + num2; // Access the num1 and num2 parameters using closures
        }

        function multiply() {
            return num1 * num2; // Access the num1 and num2 parameters using closures
        }

        return {
            add: add,
            multiply: multiply,
        };
    }

    // Example of using the calculate function
    const calculator = calculate(5, 3);
    console.log("Addition:", calculator.add()); // Output: Addition: 8 (5 + 3)
    console.log("Multiplication:", calculator.multiply()); // Output: Multiplication: 15 (5 * 3)

}