"use strict";
// here ExtendUser will have all the properties of User and also role property.
const typeUser = {
    name: "Hayes",
    age: 34,
    role: "admin"
};
// here IExtendUser will have all the properties of IUser and also role property.
const IUser = {
    name: "Hayes",
    age: 34,
    role: "admin"
};
const addNumbers = (num1, num2) => {
    return num1 + num2;
};
console.log(addNumbers(10, 20));
const rollNumbers = [1, 3, 4];
// object
const userWithTypeAlias = {
    name: "Type Alias",
    age: 20
};
const userWithInterface = {
    name: "Interface",
    age: 20
};
