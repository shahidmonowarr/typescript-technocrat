"use strict";
// spread operator
const crush = "Marry Me";
// const newData = {...myInfo, crush};
const addMeInMyCrush = (myInfo) => {
    const crush = "Marry Me";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "Monowar",
    age: 25,
    salary: 1000,
    other1: false,
    other2: null
};
const result4 = addMeInMyCrush(myInfo);
