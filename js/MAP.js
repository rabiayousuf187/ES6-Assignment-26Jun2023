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

function ques2(){
    let maxlength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
    let person = [];
    
    function mapNamesToAges(people) {
        const resultMap = new Map();
        people.forEach((person) => {
          resultMap.set(person.name, person.age);
        });
        return resultMap;
      }
    if (maxlength > 0) {
        alert("Start Entering Person Details:");
        for (let ind = 1; ind <= maxlength; ind++) {
            person.push({
                name: prompt(`Enter Person ${ind} Name:`),
                age: parseInt(prompt(`Enter Person ${ind} Age:`))
            });
        }
    }
    else {
        alert("Array Length must be Greater than 0!");
    }

    console.log(mapNamesToAges(person));
}

function ques3(){
    let maxlength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
    let person = [];
    
    function mapContainsKey(map, key) {
        return map.has(key);
      }
      
    function mapNamesToAges(people) {
        const resultMap = new Map();
        people.forEach((person) => {
          resultMap.set(person.name, person.age);
        });
        return resultMap;
      }
    if (maxlength > 0) {
        alert("Start Entering Person Details:");
        for (let ind = 1; ind <= maxlength; ind++) {
            person.push({
                name: prompt(`Enter Person ${ind} Name:`),
                age: parseInt(prompt(`Enter Person ${ind} Age:`))
            });
        }
    }
    else {
        alert("Array Length must be Greater than 0!");
    }

    let key = prompt(`Enter Key to FInd in Map:`);
    console.log(mapNamesToAges(person));
    console.log(`key = ${key}`);
    console.log(`key = ${mapContainsKey(mapNamesToAges(person), key)}`);

}

function ques4(){
    // Create an empty Map
const myMap = new Map();

// Add key-value pairs to the Map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("country", "USA");

// Get the value using a key
const name = myMap.get("name");
console.log(name); // Output: "John"

// Check if a key exists in the Map
const hasCountry = myMap.has("country");
console.log(hasCountry); // Output: true

// Get the number of key-value pairs in the Map
const size = myMap.size;
console.log(size); // Output: 3

// Delete a key-value pair from the Map
myMap.delete("age");

// Clear all key-value pairs from the Map
myMap.clear();

// You can also create a Map with initial key-value pairs using an array of arrays
const initialMap = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["country", "Canada"],
]);

console.log(initialMap); // Output: Map(3) { 'name' => 'Alice', 'age' => 25, 'country' => 'Canada' }

}