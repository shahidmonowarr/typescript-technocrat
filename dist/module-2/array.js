"use strict";
const names = ["John", "Jane", "Mary"];
const ages = [20, 30, 40];
ages.map((age => age.toString()));
// typescript tuple type
const person = ["John", 20];
person[0] = "Jane";
person[1] = 30;
