"use strict";
class Person {
    takeNap() {
        console.log('Sleeping');
    }
}
class Student1 extends Person {
    takeNap() {
        console.log('Studying');
    }
}
class Employee extends Person {
    takeNap() {
        console.log('Working');
    }
}
class Teacher1 extends Person {
    takeNap() {
        console.log('Teaching');
    }
}
function getNap(person) {
    person.takeNap();
}
const student4 = new Student1();
const employee = new Employee();
const teacher4 = new Teacher1();
getNap(student4);
getNap(employee);
getNap(teacher4);
// another example
class Shape {
    getArea() {
        return 0;
    }
}
// area => pi * r * r
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(length, breadth) {
        super();
        this.length = length;
        this.breadth = breadth;
    }
    getArea() {
        return this.length * this.breadth;
    }
}
function getAreaOfShape(shape) {
    console.log(shape.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 20));
