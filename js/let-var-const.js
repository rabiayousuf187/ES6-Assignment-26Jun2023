function ques1(){
    const pi = 3.14159;
    try{
        pi = 3.142;
    }
    catch(e){
        alert(e);
    }
}

function ques2(){
    function sumOfSquares(numbers) {
        // Check if the input is an array
        if (!Array.isArray(numbers)) {
            throw new TypeError("Input must be an array of numbers");
        }
        let sum = 0;
      
        for (let i = 0; i < numbers.length; i++) {
          const square = numbers[i] ** 2;
          sum += square;
        }
            
        return sum;
      }
      
      const numbersArray = [1, 2, 3, 4, 5];
      const result = sumOfSquares(numbersArray);

      alert(`Given Array is: ${numbersArray}\nSum of Squares of given array is ${result}`);
      console.log(result); // Output: 55
      
}