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

function ques3() {
    // Simulated API call to fetch users
    function fetchUsersFromAPI() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const users = [
                    { id: 1, name: "John Doe" },
                    { id: 2, name: "Jane Smith" },
                    { id: 3, name: "Bob Johnson" },
                ];
                resolve(users);
            }, 4000); // Simulate a 4-second delay
        });
    }

    // Function to fetch users using async/await
    async function fetchUsers() {
        try {
            console.log("Fetching users...");
            const users = await fetchUsersFromAPI();
            console.log("Users fetched:", users);
            return users;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }

    // Example of using the fetchUsers function
    fetchUsers()
        .then((users) => {
            // Do something with the fetched users
            console.log("Handling the fetched users:", users);
        })
        .catch((error) => {
            // Handle any errors that occurred during the fetch
            console.error("Error in the promise chain:", error);
        });

}

function ques4(){
    
}