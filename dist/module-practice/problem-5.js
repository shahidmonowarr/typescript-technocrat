"use strict";
// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
// Solution
const allNumbers = [1, 2, 3, 4, 5, 6];
function sumEvenNumbers(arr) {
    let sum = 0;
    arr.forEach((num) => {
        if (num % 2 === 0) {
            sum += num;
        }
    });
    return sum;
}
console.log(sumEvenNumbers(allNumbers)); // 12
