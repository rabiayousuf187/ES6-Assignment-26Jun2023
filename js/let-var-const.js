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
        let sum = 0;
      
        for (let i = 0; i < numbers.length; i++) {
          const square = numbers[i] ** 2;
          sum += square;
        }
      
        {
          var additionalValue = 5;
          sum += additionalValue;
        }
      
        return sum;
      }
      
      const numbersArray = [1, 2, 3, 4, 5];
      const result = sumOfSquares(numbersArray);
      console.log(result); // Output: 55
      
}