function ques1(){
    function forEachExample(arr) {
        // Check if the input is an array
        if (!Array.isArray(arr)) {
            console.error("Input must be an array");
            return;
        }
    
        // Use the forEach method with an arrow function to log each element
        arr.forEach((ele, ind)=> {
            console.log(`Index = ${ind} has element: `,ele);
        });
    }
    
    // Example usage:
    let arr = [1, 2, 3, 4, 5];
    forEachExample(arr); 
}