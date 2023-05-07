"use strict";
class Person4 {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this._name} and I am ${this.age} years old.`);
    }
    // getter method
    get name() {
        return this._name;
    }
}
class Employee2 extends Person4 {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    paySalary() {
        // here we cannot access name property of Person4 class because it is private. to access it we have to use getter method
        console.log(`Paying ${this.salary} to ${this.name}`);
    }
}
let myEmployee = new Employee2("John", 30, 5000);
myEmployee.greet(); // Output: Hello, my name is John and I am 30 years old.
myEmployee.paySalary(); // Output: Paying 5000 to John
