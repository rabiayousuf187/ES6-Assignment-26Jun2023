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

function ques2(){
    
}