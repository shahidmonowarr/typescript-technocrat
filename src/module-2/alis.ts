// alis typescript file
type familyType = {
    name: string,
    members: string[],
    address: string
}
const family1: familyType = {
    name: "Home",
    members: ["Shahid", "Rahim", "Karim"],
    address: "Dhaka"
}

const family2: familyType = {
    name: "House",
    members: ["Rahul", "Raj", "Rohit"],
    address: "Chittagong"
}

const family3: familyType = {
    name: "Flat",
    members: ["Munna", "Bunna", "Tunna", "Kunna"],
    address: "Sylhet"
}

// let's apply in a function

type operationType = (num1: number, num2: number) => number;

const calculate = (
    number1: number,
    number2: number,
    operation: operationType) => {
        return operation(number1, number2);
    }

    calculate(2, 3, (num1, num2) => num1 + num2);
