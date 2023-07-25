function ques1() {
    function printVariable() {
        console.log(variable);
    }
    var variable = "Hello, World!";

    printVariable();
}

function ques2() {
    function printVariable() {
        console.log(variable);
    }
    var variable = "Hello, world!";

    printVariable();
}

function ques3() {
    function printVariable() {
        console.log(variable);
    }

    const variable = "Hello, World!";

    printVariable(); // Output: "Hello, World!"
}

function ques4() {
    function printUndeclaredVariable() {
        console.log(undeclaredVariable);
    }

    printUndeclaredVariable(); // Output: ReferenceError: undeclaredVariable is not defined

}