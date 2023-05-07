"use strict";
const a = "name";
// another example of keyof with function
function getProperty(obj, key) {
    return obj[key];
}
const property = getProperty({ name: "Hayes", age: 34, address: "Dhaka", isMarried: true }, "name");
