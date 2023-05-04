"use strict";
// ternary operator
var _a, _b;
const age = 25;
// using if else
if (age >= 18) {
    console.log("You are adult");
}
else {
    console.log("You are not adult");
}
// using ternary operator
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);
// Nullish Coalescing
const isAuthenticatedUser = "";
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ userName }, { userName2 });
const myManus = {
    name: "Shahid",
    age: 25,
    address: {
        city: "No Where",
        road: "No Road",
    }
};
const home = (_b = (_a = myManus === null || myManus === void 0 ? void 0 : myManus.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home";
// here address is not defined, so it will return the second value
console.log(home);
