// normal function
// default parameter
function add(num1:number, num2:number = 10):number{
    return num1 + num2;
}

add(2);

// arrow function

const addArrow = (num1:number, num2:number): number => num1 + num2;

addArrow(2,2);


// callback function
const arr = [1,4,5]

const newArray = arr.map((elem: number) => elem*elem);

const myPerson:{
    name: string;
    balance: number;
    addBalance(money: number): void;
} = {
    name: "Shahid",
    balance: 5,
    addBalance(money: number){
        console.log( `My New Balance is ${this.balance + money}`) ;
    }
};

// spread operator
const myFriends = ["Shahid", "Rahim", "Karim"];
const myNewFriends = ["Rahul", "Raj", "Rohit"];

myFriends.push(...myNewFriends);
console.log(myFriends);
const myBestFriend = {
    fullName: "Aminul",
    age: 25
};
const [bestFriend] = myFriends;
const {fullName: myFullName} = myBestFriend;

console.log(myFullName);

// rest operator
const greetFriends = (...friends: string[]): void => friends.forEach(friend => console.log(`Hello ${friend}`));

greetFriends("munna", "Bunna", "Tunna", "Kunna");

// array and object destructuring
