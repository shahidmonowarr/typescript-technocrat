"use strict";
// fetching data from API using fetch async await
// JSON place holder
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return yield response.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getTodo();
    console.log(result);
});
getTodoData();
// Mocking
// Mocking is a process of creating fake data for testing purpose.
// Mocking is used to test the functionality of a function.
// Mocking is used to test the functionality of a function without calling the actual API.
// data fetching for string, boolean, object
// string
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Data is fetched";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
// boolean
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { other: "Data is fetched" };
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
// fetching data for string
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
// fetching data for boolean
const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    return data;
});
// fetching data for object
const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    return data;
});
