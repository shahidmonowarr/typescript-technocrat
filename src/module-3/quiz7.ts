
//Given the following code, what will be the output of numbers?
type Data = { num1: number }

type B = {

  [key in keyof Data]: string;

}

const numbers:B = {

  num1: 20

}

// answer: Type 'number' is not assignable to type 'string'.
// how to fix it?  change string to number