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
  
}