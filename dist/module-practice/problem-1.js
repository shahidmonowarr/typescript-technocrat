"use strict";
// Convert the following JavaScript array into a TypeScript tuple
const userInfo = [101, "Ema", "John", true, , "2023"];
// Solution
const userInfoTuple = [
    101,
    "Ema",
    "John",
    true,
    ,
    "2023"
];
console.log(userInfoTuple);
