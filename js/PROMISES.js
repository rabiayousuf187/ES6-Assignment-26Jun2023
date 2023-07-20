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

function ques2() {
    const promise1 = Promise.resolve(1);
    const promise2 = Promise.resolve(2);
    const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

    const promisesArray = [promise1, promise2, promise3];

    getAllResolvedValues(promisesArray)
        .then((resolvedValues) => {
            console.log(resolvedValues); // Output: [1, 2, 3] (after 1 second)
        })
        .catch((error) => {
            console.error('Error:', error);
        });


    function getAllResolvedValues(promisesArray) {
        return Promise.all(promisesArray);
    }

}