function ques1() {
    // Create an array called `fruits` with some fruit names
    const fruits = ['apple', 'banana', 'orange', 'kiwi'];

    // Use a `for...of` loop to iterate over the array and log each fruit name
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

function ques2(){
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