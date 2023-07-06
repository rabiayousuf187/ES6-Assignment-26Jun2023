function ques1() {
    function calculateSum(num1 = 0, num2 = 0) {
        const sum = num1 + num2;
        return sum;
    }

    alert("Sum of Two Numbers with Default:");
    let num1 = parseInt(prompt("Enter of Number 1 Value:"));
    let num2 = parseInt(prompt("Enter of Number 2 Value:"));

    const result = calculateSum(num1 , num2);
    alert(`Sum of ${num1} and ${num2} is   ${result}`);

}

function ques2(){
    function arrayReturn(...args) {
        console.log(args);
        return args;
    }
    
    const result = arrayReturn("red","blue","orange","green","yellow");
    console.log("Return Array of Colors Name Using Rest:" );
    console.log(result);
}
