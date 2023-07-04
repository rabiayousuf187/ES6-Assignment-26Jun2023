function ques1() {
    function calculateSum(numbers) {
        const [num1, num2] = numbers;
        const sum = num1 + num2;
        return sum;
    }

    let numbersArray = [];
    alert("Start Entering Array 2 Elments:");
    for (let maxlength = 2; maxlength > 0; maxlength--) {
        numbersArray.push(parseInt(prompt("Enter of Array")));
    }
    const result = calculateSum(numbersArray);
    alert(`Sum of Given Array ${numbersArray} is   ${result}`);

}