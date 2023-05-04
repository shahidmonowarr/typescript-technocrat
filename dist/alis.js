"use strict";
const family1 = {
    name: "Home",
    members: ["Shahid", "Rahim", "Karim"],
    address: "Dhaka"
};
const family2 = {
    name: "House",
    members: ["Rahul", "Raj", "Rohit"],
    address: "Chittagong"
};
const family3 = {
    name: "Flat",
    members: ["Munna", "Bunna", "Tunna", "Kunna"],
    address: "Sylhet"
};
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(2, 3, (num1, num2) => num1 + num2);
