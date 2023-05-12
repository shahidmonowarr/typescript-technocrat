// import addTwo from './utils/add';
// import subtract from './utils/substract';
// import multiply from './utils/multiply';
// import average from './utils/average';

import methods from './utils/index';

const add = (a: number, b: number, c: number): number => {
    return a + b;
}

const result = methods.addTwo(1, 2);
const result2 = methods.subtract(1, 2);
const result3 = methods.multiply(1, 2);
const result4 = methods.average(1, 2);

/// what is wild card import?

// answer: Wildcard imports are used to import all exports from a module.


