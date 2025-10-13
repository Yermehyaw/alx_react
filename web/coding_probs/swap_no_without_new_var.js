#!/usr/bin/node

/*
  Swaps two variables without creating a new var
*/

const prompt = require('prompt-sync')({sigint: true});  // Allow ctrl+c to close prompt


let a = prompt("Enter the value for a: ");
let b = prompt("Enter the value for b: ");
a = Number(a);
b = Number(b);

if (a === NaN || b === NaN) {
    return;
}

console.log(`a is ${a}, and b is ${b}`);

a = a + b;  // 30
b = a + b;  // 50
a = b - a;  // a = 20
b = (b - a) - a;  // b = 10

console.log("Loading. . .");

setTimeout(() => {
    console.log(`a is now ${a}, and b is now ${b}`);
}, 5000);
