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

function ques3() {
    function fetchAndParseJSON(url) {
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch((error) => {
                // Handle any errors during fetch or JSON parsing
                console.error('Error:', error);
                throw error;
            });
    }

    // const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example URL
    const apiUrl = 'https://dummyjson.com/products/1'; // Example URL

    fetchAndParseJSON(apiUrl)
        .then((jsonData) => {
            console.log(jsonData); // The parsed JSON data
        })
        .catch((error) => {
            // Handle any errors that occurred during the fetch or JSON parsing
            console.error('Error:', error);
        });

}

function ques4() {
    function sumResolvedValues(promise1, promise2) {
        return Promise.all([promise1, promise2])
            .then((resolvedValues) => {
                const sum = resolvedValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                return sum;
            })
            .catch((error) => {
                // Handle any errors from either of the promises
                console.error('Error:', error);
                throw error;
            });
    }

    const promise1 = Promise.resolve(5);
    const promise2 = Promise.resolve(10);

    sumResolvedValues(promise1, promise2)
        .then((result) => {
            console.log('Sum:', result); // Output: 15
        })
        .catch((error) => {
            // Handle any errors that occurred during the promises
            console.error('Error:', error);
        });


}

function ques5() {
    function promiseWithTimeout(promise, timeout) {
        return Promise.race([
            promise,
            new Promise((_, reject) => {
                setTimeout(() => {
                    reject(new Error('Promise timed out'));
                }, timeout);
            })
        ]);
    }

    const originalPromise = new Promise((resolve) => {
        setTimeout(() => resolve('Original promise resolved'), 2000);
    });

    promiseWithTimeout(originalPromise, 1500)
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error.message); // Output: Error: Promise timed out
        });

}

function ques6() {
    /**
 * This function takes a value and logs it to the console.
 * @param {any} value - The value to be logged.
 */
    function counter(value) {
        console.log(value);
    }

    // Create a new Promise that resolves with a value of "Start Counting"
    let promise = new Promise(function (resolve, reject) {
        resolve("Start Counting");
    });

    // Set up the next function in the Promise with four then() instances
    promise
        .then(counter) // Output "Start Counting"
        .then(function () {
            return new Promise(function (resolve, reject) {
                resolve("one");
            });
        })
        .then(counter) // Output "one"
        .then(function () {
            return new Promise(function (resolve, reject) {
                resolve("two");
            });
        })
        .then(counter) // Output "two"
        .then(function () {
            return new Promise(function (resolve, reject) {
                resolve("three");
            });
        })
        .then(counter) // Output "three"
        .catch(function (error) {
            // Log any errors that occur
            console.error("An error occurred:", error);
        });
}