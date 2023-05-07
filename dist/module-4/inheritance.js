"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // method
    makeSleep(hours) {
        return `${this.name} is sleeping for ${hours} hours.`;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student("John", 20, "New York");
console.log(student1.makeSleep(7));
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    // method
    takeClasses(numberOfClasses) {
        return `${this.name} is taking ${numberOfClasses} classes.`;
    }
}
const teacher1 = new Teacher("Mr. X", 30, "New York", "Professor");
console.log(teacher1.makeSleep(8));
console.log(teacher1.takeClasses(3));
