// // You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// // Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

// // Solution

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     category: string;
// }

// const products: Product[] = [
//     {
//         id: 1,
//         name: "Cheese",
//         price: 2.5,
//         category: "dairy",
//     },
//     {
//         id: 2,
//         name: "Milk",
//         price: 3,
//         category: "dairy",
//     },
//     {
//         id: 3,
//         name: "Yogurt",
//         price: 1.25,
//         category: "dairy",
//     },
//     {
//         id: 4,
//         name: "Beef",
//         price: 5,
//         category: "meat",
//     },
//     {
//         id: 5,
//         name: "Chicken",
//         price: 2.5,
//         category: "meat",
//     }
// ];

// function filterProducts<T, K extends keyof T>(arr: T[], criterion: K, value: T[K]): T[] {
//     return arr.filter((product) => product[criterion] === value);
// }

// console.log(filterProducts(products, "price", 2.5));