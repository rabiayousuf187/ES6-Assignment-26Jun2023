function ques1(){
  function createGreeting(obj) {
    var message = `Hello,${obj.name} ! You are ${obj.age} years old.`;
    return message;
  }
  
  
  var person = {
    name: prompt("Enter Your Name:"),
    age: parseInt(prompt("Enter Your Age:")),
  };
  
  var greeting = createGreeting(person);
  alert(greeting); // Output: Hello, John! You are 25 years old.
  
}

function ques2(){
  function calculateSumAndAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    const average = sum / numbers.length;
    return `Sum: ${sum}, Average: ${average}`;
  }
  
 
  
  
  let maxlength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
  let numbersArray =[];
  
  if (maxlength > 0) {
    alert("Start Entering Arrays Elments:");
    for(maxlength ; maxlength > 0 ; maxlength-- ){
      numbersArray.push(parseInt(prompt("Enter of Array")) );
    }
    const result = calculateSumAndAverage(numbersArray);
    console.log(result); // Output: Sum: 30, Average: 6
    alert(result); // Output
  }
  else{
    alert("Array Length must be Greater than 0!");
  }
  
}