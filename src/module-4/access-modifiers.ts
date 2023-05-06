class BankAccount{
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    getBalance(){
        console.log(`Balance is ${this._balance}`);
    }

    addDeposit(amount: number){
        this._balance = this._balance + amount;
    }
}

class StudentAccount extends BankAccount{
    constructor(id: number, name: string, balance: number){
        super(id, name, balance);
    }
}

const myAccount = new BankAccount(1, 'My Account', 1000);
console.log(myAccount);

