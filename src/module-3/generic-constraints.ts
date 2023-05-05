// spread operator
const crush = "Marry Me";

// type MandatoryInfoType = {
//     name: string;
//     age: number;
//     salary: number;
// }

interface MandatoryInfoInterface{
    name: string;
    age: number;
    salary: number;
}

// const newData = {...myInfo, crush};
const addMeInMyCrush = <T extends MandatoryInfoInterface>(myInfo: T)=> {
    const crush = "Marry Me";
    const newData = {...myInfo, crush};
    return newData;
}

type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null
}

const myInfo : MyInfoType = {
    name: "Monowar",
    age: 25,
    salary: 1000,
    other1: false,
    other2: null
}

const result4 = addMeInMyCrush<MyInfoType>(myInfo);