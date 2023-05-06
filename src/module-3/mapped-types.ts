const arrayOfNumber = [1,2,3]
const arrayOfString = arrayOfNumber.map((number) => number.toString());
console.log(arrayOfString);

type Volume = {
    height: number;
    width: number;
    depth: number;
};

type Area<T> = {
    // [key in keyof Volume]: Volume[key];
  readonly  [key in keyof T]: T[key];
}

const area1 : Area<{height: number, width: number, depth: number}> = { height: 12, width: 22, depth: 12};

type AreaString = {
    height: string;
    width: string;
}

type AreaReadonly = {
   readonly height: number;
   readonly width: number;
}

const rectangularArea: AreaReadonly = {
    height: 10,
    width: 12
}

rectangularArea.width 
// type X = AreaNumber['height'];  //  look up typees
// type Y = keyof AreaNumber;  // 'width' | 'height'
