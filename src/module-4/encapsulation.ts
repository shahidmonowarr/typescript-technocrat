class Person4 {
    private _name: string;
    protected age: number;
  
    constructor(name: string, age: number) {
      this._name = name;
      this.age = age;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this._name} and I am ${this.age} years old.`);
    }

    // getter method
    get name(): string{
        return this._name;
    }
  }
  
  class Employee2 extends Person4 {
    private salary: number;
  
    constructor(name: string, age: number, salary: number) {
      super(name, age);
      this.salary = salary;
    }
  
    paySalary(): void {
        // here we cannot access name property of Person4 class because it is private. to access it we have to use getter method
      console.log(`Paying ${this.salary} to ${this.name}`);
    }
  }
  
  let myEmployee = new Employee2("John", 30, 5000);
  myEmployee.greet(); // Output: Hello, my name is John and I am 30 years old.
  myEmployee.paySalary(); // Output: Paying 5000 to John
  