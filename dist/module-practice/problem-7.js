"use strict";
// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
// Solution
const AllNumbers = [1, 2, 3, 4, 5, 6];
function findMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
const [min, max] = findMinMax(AllNumbers);
console.log(min); // 1
console.log(max); // 6
