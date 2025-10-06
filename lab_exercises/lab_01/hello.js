console.log("Hello, World!");

var a = 5;
var a = "Hello";
b = 10;
console.log("Sum:", a + b);
console.log(typeof(a))
console.log(typeof(b))

let x =100;
console.log(x)
// let x = "Hey!"; Not allowed

// A separate block allows for the use of the same variable name
{
    let x = "JavaScript";
    console.log(x);
}

console.log(x)

// Function Declaration
function greet() {
    console.log("Hello there!");
}

function add(a, b) {
    return a + b;
}

// Function Expression
let greet = function() {
    console.log("Heyyy!");
    console.log(this)
    console.log(arguments)
}

console.log(typeof(greet));

// Arrow Function
greet = () => {
    console.log(this) // {}
    console.log(arguments) // error
    console.log("Heyyy!");
}