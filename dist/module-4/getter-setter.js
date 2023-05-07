"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // getter property
    get balance() {
        return this._balance;
    }
    // getBalance(): number{
    //     return this._balance;
    // }
    // setter property
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
class StudentAccount extends BankAccount {
    constructor(id, name, balance) {
        super(id, name, balance);
    }
}
const myAccount = new BankAccount(1, 'My Account', 500);
console.log(myAccount.balance);
myAccount.deposit = 1000;
console.log(myAccount.balance);
