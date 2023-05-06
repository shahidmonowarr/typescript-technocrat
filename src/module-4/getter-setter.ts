class BankAccount{
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // getter property
    get balance(): number{
        return this._balance;
    }

    // getBalance(): number{
    //     return this._balance;
    // }

    // setter property
    set deposit(amount: number){
        this._balance = this._balance + amount;
    }

    // addDeposit(amount: number){
    //     this._balance = this._balance + amount;
    // }
}

class StudentAccount extends BankAccount{
    constructor(id: number, name: string, balance: number){
        super(id, name, balance);
    }
}

const myAccount = new BankAccount(1, 'My Account', 500);
console.log(myAccount.balance);
myAccount.deposit = 1000;
console.log(myAccount.balance);

