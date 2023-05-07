"use strict";
// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
const products = [
    ["Cheese", 2.5, 6],
    ["Milk", 3, 2],
    ["Yogurt", 1.25, 4],
    ["Beef", 5, 10],
    ["Chicken", 2.5, 3]
];
function calculateTotalCost(arr) {
    let totalCost = 0;
    arr.forEach((product) => {
        totalCost += product[1] * product[2];
    });
    return totalCost;
}
console.log(calculateTotalCost(products)); // 55.75
