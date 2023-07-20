function ques1(){
    function mapNumbersToSquares(numbers) {
        const resultMap = new Map();
        numbers.forEach((number) => {
          resultMap.set(number, number * number);
        });
        return resultMap;
      }

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
    const arraySquare = mapNumbersToSquares(numbersArray);
    console.log(arraySquare); // Output
      
}