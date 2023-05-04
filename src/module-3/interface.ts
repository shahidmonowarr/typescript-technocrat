// type alis
type User ={
    name: string;
    age: number;
};

//type extend
type ExtendUser = User & {
    role: string;
}
// here ExtendUser will have all the properties of User and also role property.

const typeUser: ExtendUser={
    name: "Hayes",
    age: 34,
    role: "admin"
}

// interface
interface IUser{
    name: string;
    age: number;
}

// extend interface
interface IExtendUser extends IUser{
    role: string;

}
// here IExtendUser will have all the properties of IUser and also role property.

const IUser : IExtendUser={
    name: "Hayes",
    age: 34,
    role: "admin"
}

// we will use type for primitive data type and interface for object type.
// we can use interface for primitive data type but it is not recommended.
// we can use interface for object type like array, object, function etc.

// function signature
type addNumberType = (num1: number, num2: number) => number;

interface IAddNumber{
    (num1: number, num2: number): number;
}

const addNumbers: addNumberType =(num1, num2) =>{
    return num1 + num2;
}

console.log(addNumbers(10, 20));

// array
//type rollNumbersType = number[];
interface IRollNumbersType{
    [index: number]: number;
}
const rollNumbers: IRollNumbersType = [1,3,4]



// object
const userWithTypeAlias: User={
    name: "Type Alias",
    age: 20
}

const userWithInterface: IUser={
    name: "Interface",
    age: 20
}



