"use strict";
function add(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
add(1, 2);
add('1', '2');
function getUser(user) {
    if ("role" in user) {
        return `${user.name} is an Admin`;
    }
    else {
        return `${user.name} is a Normal User`;
    }
}
const normalUser1 = { name: "John" };
const adminUser1 = { name: "John", role: "Admin" };
console.log(getUser(normalUser1));
// instanceof Guard
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am making sound");
    }
}
// child class
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("Woof");
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMeow() {
        console.log("Meow");
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeow();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog("German Bhaia", "Dog");
const animal2 = new Cat("Persian", "Cat");
getAnimal(animal1);
getAnimal(animal2);
