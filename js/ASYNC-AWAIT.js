function ques1() {
    function delayedGreeting(name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof name !== 'string') {
                    reject(new Error('Name must be a string'));
                } else {
                    resolve(`Hello, ${name}!`);
                }
            }, 2000);
        });
    }

    async function greet() {
        try {
            let name = prompt("Enter Name: ");
            const greeting = await delayedGreeting(name);
            console.log(greeting);
        } catch (error) {
            console.error(error);
        }
    }

    greet();
}

function ques2() {
    // Function to simulate an asynchronous API call
    function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = {
                    message: "Data fetched successfully!",
                    timestamp: new Date().toISOString(),
                };
                resolve(data);
            }, 3000); // Simulate a 3-second delay
        });
    }

    // Example of using async/await to call the fetchData function
    async function fetchDataAsync() {
        try {
            console.log("Fetching data...");
            const data = await fetchData();
            console.log("Data received:", data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Call the async function
    fetchDataAsync();

}

function ques3(){
    
}