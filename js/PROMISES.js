function ques1() {
    function calculateSquareWithDelay(number) {
        return new Promise((resolve, reject) => {
            if (typeof number !== 'number') {
                reject(new Error('Input must be a number'));
            } else {
                setTimeout(() => {
                    const square = number * number;
                    resolve(square);
                }, 1000);
            }
        });
    }
    alert("Find Square of any Number:");
    let number = parseInt(prompt("Enter of Number:"));
  
    calculateSquareWithDelay(number)
        .then((result) => {
           console.log('Square:', result);
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
}

function ques2(){
    
}