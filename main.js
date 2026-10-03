const input = require('readline-sync');

let name = input.question("What is your name?");
console.log("Hello, " + name + "!");

let question1 = input.question("Which data type results in one of two values, true or false?");
let question2 = input.question("By which process does JavaScript automatically transforms one data type into another?");
let question3 = input.question("Which symbol represents the operator that returns the remainder of a division operation?");
let question4 = Number(input.question("What number does null convert to in a mathematical operation?"));
let question5 = input.question("With what primitive value does JavaScript automatically initialize a declared variable with no assigned value?");

console.log("Your answers:");
console.log(question1);
console.log(question2);
console.log(question3);
console.log(question4);
console.log(question5);
