function ques1() {
    // Step 1: Create a simple object with three items
    const myObject = {
        name: "John Doe",
        age: 30,
        occupation: "Engineer",
    };

    // Step 2: Using the for in loop, get the properties' names and values from the object and output them into the console
    console.log(`Object properties and values using "for in" loop:`);
    for (const key in myObject) {
        if (myObject.hasOwnProperty(key)) {
            console.log(`${key}: ${myObject[key]}`);
        }
    }

    // Step 3: Create an array containing the same three items
    const myArray = ["John Doe", 30, "Engineer"];

    // Step 4: Using the for in loop, output the values from the array into the console
    console.log(`Array values using "for in" loop:`);
    for (const index in myArray) {
        console.log(myArray[index]);
    }

}

function ques2() {
    // Step 1: Create the person object
    const person = {
        name: "John Doe",
        age: 30,
        country: "United States",
    };

    // Step 2: Use the for in loop to iterate over the object and log each property name
    console.log("Properties of the 'person' object:");
    for (const property in person) {
        console.log(property);
    }

}

function ques3() {
    // Step 1: Create the numbers array with some numeric values
    const numbers = [1, 2, 3, 4, 5];

    // Step 2: Use the for...in loop to iterate over the array and log each index
    console.log("Indices of the 'numbers' array using for...in loop:");
    for (const index in numbers) {
        console.log(parseInt(index)); // Convert index to a number using parseInt
    }

}

function ques4() {
    // Step 1: Create the string called 'message' with some text
    const message = "Hello, World!";

    // Step 2: Use the for...in loop to iterate over the characters of the string and log each character
    console.log("Characters of the 'message' string using for...in loop:");
    for (const index in message) {
        console.log(message[index]);
    }

}

function ques5(){
    
}