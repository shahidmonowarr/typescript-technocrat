// what is generic type in typescript
// generic type is a type which takes another type as an argument. it is similar to function argument. we can use generic type to create reusable component. we can use generic type in interface, type, class, function etc.

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["father", "son"];

interface relationWithSalaryInterface {
    name: string;
    salary: number;
}

const relationWithSalary: GenericTuple<relationWithSalaryInterface, string> = [{
    name: "Hayes",
    salary: 1000
},
    "son"];

const relationWithSalary2: GenericTuple<relationWithSalaryInterface, string> = [{
    name: "Hamid",
    salary: 2000
},
    "father"];

type GenericArray<T> = Array<T>;

const rollNumbers1: GenericArray<number> = [1, 3, 4];
const rollNumbers2: GenericArray<string> = ["1", "3", "4"];
const rollNumbers3: GenericArray<boolean> = [true, false, true];

type NameRollType = {
    name: string;
    rollNumber: number;
};
const userNameAndRollNumbers: GenericArray<NameRollType> = [
    { name: "Hayes", rollNumber: 1 },
    { name: "Marry", rollNumber: 2 },
    { name: "John", rollNumber: 3 }
];

add(3,4);