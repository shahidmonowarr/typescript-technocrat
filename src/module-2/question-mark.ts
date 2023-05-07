// ternary operator

const age: number = 25;

// using if else
if(age >= 18){
    console.log("You are adult");
} else {
    console.log("You are not adult");
}

// using ternary operator
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// Nullish Coalescing
const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({userName}, {userName2});
// here isAuthenticatedUser is an empty string, which is a falsy value, so it will return the second value

// another example
type Manus = {
    name: string;
    age: number;
    address?: {
        city: "No Where";
        road: "No Road";
        home?: "";
    }
}

const myManus: Manus = {
    name: "Shahid",
    age: 25,
    address: {
        city: "No Where",
        road: "No Road",
    }
}

const home =  myManus?.address?.home ?? "No Home";
// here address is not defined, so it will return the second value
console.log(home);