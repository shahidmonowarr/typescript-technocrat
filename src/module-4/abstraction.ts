// interface

// interface IVehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// }

// class Vehicle implements IVehicle{
//     // constructor
//     constructor(
//         public name: string, 
//         public model: string, 
//         public year: number) {}

//     // have to implement all methods of interface
//     startEngine(): void {
//         console.log('Start Engine');
//     }
//     stopEngine(): void {
//         console.log('Stop Engine');
//     }
//     move(): void {
//         console.log('Move');
//     }
//     // extra method
//     test(): void {
//         console.log('Test');
//     }
// }

// // instance of class
// const vehicle1 = new Vehicle("Bike", "Honda", 2000);
// console.log(vehicle1);


// abstract class example with the same upper example

abstract class Vehicle{
    // constructor
    constructor(
        public name: string, 
        public model: string, 
        public year: number) {}

    abstract startEngine(): void;
    abstract stopEngine(): void;
    move(): void{
        console.log('Move');
    };
}

// child class
class Car extends Vehicle{
    startEngine(): void {
        console.log('Start Engine');
    }
    stopEngine(): void {
        console.log('Stop Engine');
    }
}

// instance of class
const vehicle1 = new Car("Car", "Toyota", 2000);
console.log(vehicle1);

