function ques1() {
    // Step 1: Create a simple object with three items
    const myObject = {
        name: "John Doe",
        age: 30,
        occupation: "Engineer",
    };

    // Step 2: Using the for in loop, get the properties' names and values from the object and output them into the console
    console.log("Object properties and values using for in loop:");
    for (const key in myObject) {
        if (myObject.hasOwnProperty(key)) {
            console.log(`${key}: ${myObject[key]}`);
        }
    }

    // Step 3: Create an array containing the same three items
    const myArray = ["John Doe", 30, "Engineer"];

}