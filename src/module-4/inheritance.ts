class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    
    // method
    makeSleep(hours: number): string {
        return `${this.name} is sleeping for ${hours} hours.`;
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

const student1 = new Student("John", 20, "New York");

console.log(student1.makeSleep(7));

class Teacher extends Parent {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    // method
    takeClasses(numberOfClasses: number): string {
        return `${this.name} is taking ${numberOfClasses} classes.`;
    }
}

const teacher1 = new Teacher("Mr. X", 30, "New York", "Professor");

console.log(teacher1.makeSleep(8));
console.log(teacher1.takeClasses(3));