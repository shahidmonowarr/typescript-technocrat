"use strict";
const arrayOfNumber = [1, 2, 3];
const arrayOfString = arrayOfNumber.map((number) => number.toString());
console.log(arrayOfString);
const area1 = { height: 12, width: 22, depth: 12 };
const rectangularArea = {
    height: 10,
    width: 12
};
rectangularArea.width;
// type X = AreaNumber['height'];  //  look up typees
// type Y = keyof AreaNumber;  // 'width' | 'height'
