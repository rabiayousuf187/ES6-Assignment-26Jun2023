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

function ques2(){
    let str = prompt("Enter String to Check Length:")
    const getStringLength = (str) => str.length;

    alert(`String ${str} length is ${getStringLength(str)}`);
}

function ques3(){
    alert(`Product of 2 Numbers:`);
    let num1 = parseInt(prompt("Enter Number 1:"));
    let num2 = parseInt(prompt("Enter Number 2:"));

    const multiply = (num1, num2) => num1 * num2;

    alert(`Product of ${num1} and ${num2} is ${multiply(num1 , num2)}`);
}

function ques4(){
    const calculateAverage = (numbers) => {
        if (numbers.length === 0) {
          return 0; // To avoid division by zero for an empty array
        }
      
        const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
        return sum / numbers.length;
      };
      
    let maxlength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
    let numbersArray = [];

    if (maxlength > 0) {
        alert("Start Entering Arrays Elments:");
        for (maxlength; maxlength > 0; maxlength--) {
            numbersArray.push(parseInt(prompt("Enter of Array")));
        }
        
    }
    else {
        alert("Array Length must be Greater than 0!");
    }

    alert("Average of Array "+ numbersArray + " is " + calculateAverage(numbersArray));
}

function ques5(){
    let name = prompt("Enter Your Name:")
    const generateGreeting = (name) => {
        return `Hello, ${name}! Welcome to our website.`;
      };
 
      alert(generateGreeting(name));
}