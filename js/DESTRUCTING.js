function ques1() {
    function calculateSum(numbers) {
        const [num1, num2] = numbers;
        const sum = num1 + num2;
        return sum;
    }

    let maxlength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
      let numbersArray =[];

      if (maxlength > 0) {
        alert("Start Entering Arrays Elments:");
          for(maxlength ; maxlength > 0 ; maxlength-- ){
            numbersArray.push(parseInt(prompt("Enter of Array")) );
          }
          const result = calculateSum(numbersArray);
          alert(`Sum of Given Array ${numbersArray} is   ${result}`);
        }
      else{
        alert("Array Length must be Greater than 0!");
      }

}