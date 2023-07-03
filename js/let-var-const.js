function ques1() {
    const pi = 3.14159;
    try {
        pi = 3.142;
    }
    catch (e) {
        alert(e);
    }
}

function ques2() {
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

function ques3() {
    const stringsArray = ["apple", "banana", "cherry", "date", "elderberry"];
    
    for (let i = 0; i < stringsArray.length; i++) {
        let firstLetter = stringsArray[i].charAt(0);
        console.log(firstLetter);
    }
    
}
function ques4() {
    function createAsteriskString(n) {
        const asterisk = '*';
        return asterisk.repeat(n);
    }
    
    const n = parseInt(prompt("Enter number to print * N times:"));
    const result = createAsteriskString(n);
    console.log(result); // Output: *****
    
}

function ques5() {
    function createGreeting(obj) {
        var message = "Hello, " + obj.name + "! You are " + obj.age + " years old.";
        return message;
      }
      
      
      var person = {
        name: prompt("Enter Your Name:"),
        age: parseInt(prompt("Enter Your Age:")),
      };
      
      var greeting = createGreeting(person);
      alert(greeting); // Output: Hello, John! You are 25 years old.
      
}

function ques6() {
    function findMaxValue(numbers) {
        let max;
      
        if (numbers.length > 0) {
          max = Math.max(...numbers);
        }
      
        return max;
      }
      
      let maxlength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
      let numbersArray = 0;

      if (maxlength > 0) {
          for(maxlength ; maxlength > 0 ; maxlength-- ){
            numbersArray.push( parseInt(prompt("Enter max length of Array,\nYou want to process:")) );
          }
        
      }
      const maxValue = findMaxValue(numbersArray);
      console.log(maxValue); // Output: 9
      
      alert(greeting); // Output: Hello, John! You are 25 years old.
      
}