"use strict";
// what is generic type in typescript
// generic type is a type which takes another type as an argument. it is similar to function argument. we can use generic type to create reusable component. we can use generic type in interface, type, class, function etc.
const relation = ["father", "son"];
const relationWithSalary = [{
        name: "Hayes",
        salary: 1000
    },
    "son"];
const relationWithSalary2 = [{
        name: "Hamid",
        salary: 2000
    },
    "father"];
const rollNumbers1 = [1, 3, 4];
const rollNumbers2 = ["1", "3", "4"];
const rollNumbers3 = [true, false, true];
const userNameAndRollNumbers = [
    { name: "Hayes", rollNumber: 1 },
    { name: "Marry", rollNumber: 2 },
    { name: "John", rollNumber: 3 }
];
add(3, 4);
