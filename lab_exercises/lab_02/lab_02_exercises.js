// Jayden Lewis
// 101484621
// 12/09/2025



// Exercise 01
console.log("\n===== Exercise 01 =====");

const greeter = (myArray) => {
    
    const greetText = 'Hello';

    for (const name of myArray) {
        console.log(`${greetText} ${name}!`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'The Hulk']);



// Exercise 02
console.log("\n===== Exercise 02 =====");

const capitalize = (word) => {

    const [first, ...rest] = word;
    let capitalizedWord = (first.toUpperCase() + [...rest].join('').toLowerCase())
    
    return capitalizedWord;
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));



// Exercise 03
console.log("\n===== Exercise 03 =====");

const capitalizedColours = (colours) => {

    const capCol = colours.map(colour => capitalize(colour));
    return capCol;
}

const colours = ['red', 'green', 'blue', 'orange', 'pink'];
console.log(capitalizedColours(colours));



// Exercise 04
console.log("\n===== Exercise 04 =====");

const filterNums = (nums) => {

    const filteredNums = nums.filter(num => num < 20);
    return filteredNums;
}

var numbers = [1, 60, 34, 30, 20, 5, 69, 420];
console.log(filterNums(numbers));



// Exercise 05
console.log("\n===== Exercise 05 =====");

const calcSum = (nums) => {

    const sum = nums.reduce((total, currentNum) => total + currentNum, 0);

    return sum;
}

const calcProduct = (nums) => {

    const product = nums.reduce((total, currentNum) => total * currentNum, 1);

    return product;
}

var numArray = [1, 2, 3, 4];
console.log(calcSum(numArray));
console.log(calcProduct(numArray));



// Exercise 06
console.log("\n===== Exercise 06 =====");

class Car {

    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    displayCarInfo() {
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {

    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    displaySedanInfo() {
        return this.displayCarInfo() + ` - Balance: ${this.balance}`
    }
}

const car = new Car('Pontiac Firebird', 1976);
console.log(car.displayCarInfo())

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.displaySedanInfo())