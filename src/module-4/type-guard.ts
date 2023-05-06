// typeof guard
type Alphaneumeric = string | number;
function add(param1: Alphaneumeric, param2: Alphaneumeric) {
    if(typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else{
        return param1.toString() + param2.toString()
    }
    
}

add(1, 2);
add('1', '2');

// in Guard
type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: "Admin";
}

function getUser(user: NormalUserType | AdminUserType): string {
    if("role" in user) {
        return `${user.name} is an Admin`
    }
    else{
        return `${user.name} is a Normal User`
    }
}

const normalUser1 : NormalUserType = { name: "John" };
const adminUser1 : AdminUserType = { name: "John", role: "Admin" };

console.log(getUser(normalUser1));

// instanceof Guard

class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log("I am making sound");
    }
}

// child class
class Dog extends Animal{
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeBark() {
        console.log("Woof");
    }
}
class Cat extends Animal{
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeMeow() {
        console.log("Meow");
    }
}

function isDog(animal: Animal): animal is Dog{
    return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat{
    return animal instanceof Cat;
}

function getAnimal(animal: Animal){
    if(isDog(animal)) {
        animal.makeBark();
    }
    else if(isCat(animal)) {
        animal.makeMeow();
    }
    else{
        animal.makeSound();
    }
}

const animal1 = new Dog("German Bhaia", "Dog");
const animal2 = new Cat("Persian", "Cat");

getAnimal(animal1);
getAnimal(animal2);
