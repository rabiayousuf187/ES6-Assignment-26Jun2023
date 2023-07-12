function ques1() {
    function calculateSum(num1 = 0, num2 = 0) {
        const sum = num1 + num2;
        return sum;
    }

    alert("Sum of Two Numbers with Default:");
    let num1 = parseInt(prompt("Enter of Number 1 Value:"));
    let num2 = parseInt(prompt("Enter of Number 2 Value:"));

    const result = calculateSum(num1, num2);
    alert(`Sum of ${num1} and ${num2} is   ${result}`);

}

function ques2() {
    function arrayReturn(...args) {
        console.log(args);
        return args;
    }

    const result = arrayReturn("red", "blue", "orange", "green", "yellow");
    console.log("Return Array of Colors Name Using Rest:");
    console.log(result);
}

function ques3() {
    function findMaxValue(numbers) {
        console.log("Array numbers in Max Fun. ==== ", ...numbers);
        return Math.max(...numbers);
    }

    let maxlength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
    let numbersArray = [];

    if (maxlength > 0) {
        alert("Start Entering Arrays Elments:");
        for (maxlength; maxlength > 0; maxlength--) {
            numbersArray.push(parseInt(prompt("Enter of Array")));
        }
        const maxValue = findMaxValue(numbersArray);
        alert(`Maximum Value is ${maxValue}`); // Output
    }
    else {
        alert("Array Length must be Greater than 0!");
    }
}

function ques4() {
    let maxlength1 = parseInt(prompt("Enter max length of First Array,\nYou want to process:"));
    let maxlength2 = parseInt(prompt("Enter max length of Second Array,\nYou want to process:"));
    let numbersArray1 = [], numbersArray2 = [], newArray = 0;

    function concateArray(numbersArray1, numbersArray2) {
        console.log("Array1 numbers in Fun. ==== ", ...numbersArray1);
        console.log("Array2 numbers in Fun. ==== ", ...numbersArray2);
        newArray = [...numbersArray1, ...numbersArray2];
        console.log("In Fun Concatenate Arrays ==== ",newArray);
        return newArray;
    }

    
    if (maxlength1 > 0) {
        alert("Start Entering First Arrays Elments:");
        for (maxlength1; maxlength1 > 0; maxlength1--) {
            numbersArray1.push(parseInt(prompt("Enter of Array")));
        }
    }
    else {
        alert("Array Length must be Greater than 0!");
    }
    
    if (maxlength2 > 0) {
        alert("Start Entering Second Arrays Elments:");
        for (maxlength2; maxlength2 > 0; maxlength2--) {
            numbersArray2.push(parseInt(prompt("Enter of Array")));
        }
    }
    else {
        alert("Array Length must be Greater than 0!");
    }
    
    newArray = concateArray(numbersArray1, numbersArray2);
    console.log("After Concatenate Arrays ==== ",newArray);
    alert(`Maximum Value is ${newArray}`); // Output
}