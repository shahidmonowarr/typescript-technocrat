// // arrow function
// const createArray =(param: string): string[] => {
//     return [param];
// }
// const createArray1 =<X, Y>(param1: X, param2: Y): [X,Y] => {
//     return [param1, param2];
// }

// const result = createArray("Hayes");
// const result1 = createArray1<string, number>("Hayes", 25);
// const result2 = createArray1<boolean, Array<string>>(false, ["Hayes", "Marry"]);
// type NameAgeType =
//     {
//         name: string;
//         age: number;
//     }
// const result3 = createArray1<NameAgeType, boolean>({name: "Hayes", age: 25}, true);

// // spread operator
// const crush = "Marry Me";
// const myInfo = {
//     name: "Monowar",
//     age: 25,
//     salary: 1000
// }

// // const newData = {...myInfo, crush};
// const addMeInMyCrush = <T>(myInfo: T)=> {
//     const crush = "Marry Me";
//     const newData = {...myInfo, crush};
//     return newData;
// }

// const result4 = addMeInMyCrush(myInfo);