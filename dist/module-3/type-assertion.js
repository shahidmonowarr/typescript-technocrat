"use strict";
let emni;
emni = "Next Level web Development";
emni.toUpperCase();
// or
emni.toUpperCase();
// but this is not recommended as it can be confused with JSX syntax.
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseInt(param) * 1000;
        return `The converted value is ${value} gram`;
    }
    else if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
    else {
        return undefined;
    }
}
const resultToBeString = kgToGram("10");
const resultToBeNumber = kgToGram(10);
try {
}
catch (err) {
    console.log(err.message);
}
