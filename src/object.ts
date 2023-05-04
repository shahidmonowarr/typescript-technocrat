// typescript object type
const user : {
    name: string;
    age: number;
    isMarried: boolean;
    wife?: string
}={
    name: 'Hayes',
    age: 34,
    isMarried: true
}

// typescript literal type
const org : {
    name: "ABC Corp";
    company: string;
    year: number;
    isListed: boolean;
} = {
    // name should be "ABC Corp" only otherwise it will throw an error
    name: "ABC Corp",
    company: "ABC Corporation",
    year: 2020,
    isListed: true
}

