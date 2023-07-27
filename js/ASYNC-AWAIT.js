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