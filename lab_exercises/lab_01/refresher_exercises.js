// Jayden Lewis
// 101484621
// COMP 3123
// Date: 06/09/2025

// Exercise 1
console.log("\n===== Exercise 1 =====");

function capitalize(sentence) {

    let result = "";

    for (let i = 0; i < sentence.length; i++) {

        if (i === 0 || sentence[i - 1] === " ") {

            result += sentence[i].toUpperCase();
        }

        else {
            result += sentence[i];
        }

    }

    return result;
}

let sentence = "the quick brown fox"
console.log("Original:", sentence)
console.log("Capitilized:", capitalize(sentence))



// Exercise 2
console.log("\n===== Exercise 2 =====");

function largestInt(integers) {

    let largestInt = integers[0]

    for (let int of integers) {

        if (int > largestInt) {

            largestInt = int;
        }
    }

    return largestInt;
}

let integers = [[440, 1000, 510], [1, 0, 1], [0, -10, -20]];
console.log("Integers:", integers[0].toString());
console.log("Largest Integer:", largestInt(integers[0]));
console.log("\nIntegers:", integers[1].toString());
console.log("Largest Integer:", largestInt(integers[1]));
console.log("\nIntegers:", integers[2].toString());
console.log("Largest Integer:", largestInt(integers[2]));



// Exercise 3
console.log("\n===== Exercise 3 =====");

function charSwap(word) {

    if (word.length <= 3) {
        return word;
    }

    let start = "";

    for (let i = 0; i < 3; i++) {

        start = word[word.length - 1 - i] + start;
    }

    return start + word.slice(0, word.length - 3);
}

let words = ["JavaScript", "Python", "Hi"]
console.log("Original Words:", words.toString());

console.log("Swapped:", charSwap(words[0]))
console.log("Swapped:", charSwap(words[1]))
console.log("Swapped:", charSwap(words[2]))



// Exercise 4
console.log("\n===== Exercise 4 =====");

function angleType(angle) {

    let type = "";

    if (angle > 0 && angle < 90) { type = "acute"; }

    else if (angle === 90) { type = "right"; }

    else if (angle > 90 && angle < 180) { type = "obtuse"; }

    else if (angle === 180) { type = "straight"; }

    else { type = "undefined"}

    let result = angle + " degrees is an " + type + " angle."

    return result;
}

console.log(angleType(365))
console.log(angleType(90))
console.log(angleType(45))



// Exercise 5
console.log("\n===== Exercise 5 =====");

function maxSum(array, con) {

    let largestSum = null;
    

    for (let i = 0; i < array.length; i++) {
        
        let currentSum = array[i];

        for (let j = 1; j < con; j++) {
            
            currentSum += array[i + j]
        }

        if (currentSum > largestSum) {

            largestSum = currentSum;
        }

    }

    return largestSum;
}

console.log("Array: [1, 2, 3, 14, 5],  Max Sum of 2:", maxSum([1, 2, 3, 14, 5], 2))
console.log("Array: [2, 3, 5, 1, 6],   Max Sum of 3:", maxSum([2, 3, 5, 1, 6], 3))
console.log("Array: [9, 3, 5, 1, 7],   Max Sum of 2:", maxSum([9, 3, 5, 1, 7], 2))