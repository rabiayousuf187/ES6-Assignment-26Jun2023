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

    function filterMapByCallback(originalMap, callback) {
        const filteredMap = new Map();
      
        originalMap.forEach((value, key) => {
          if (callback(key, value)) {
            filteredMap.set(key, value);
          }
        });
      
        return filteredMap;
      }
      
      const originalMap = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
        ["d", 4],
      ]);
      
      function isEvenNumber(key, value) {
        return value % 2 === 0;
      }
      
      const filteredMap = filterMapByCallback(originalMap, isEvenNumber);
      console.log(filteredMap); // Output: Map(2) { 'b' => 2, 'd' => 4 }
}

function ques5(){
    function mergeMaps(map1, map2) {
        const mergedMap = new Map([...map1, ...map2]);
        return mergedMap;
      }
      
    const map1 = new Map([
        ["a", 1],
        ["b", 2],
      ]);
      
      const map2 = new Map([
        ["b", 3],
        ["c", 4],
        ["d", 5],
      ]);
      
      const mergedMap = mergeMaps(map1, map2);
      console.log(mergedMap); // Output: Map(3) { 'a' => 1, 'b' => 3, 'c' => 4, 'd' => 5 } 
}