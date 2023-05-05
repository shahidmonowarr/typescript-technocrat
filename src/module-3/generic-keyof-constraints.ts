type PersonType = {
    name: string;
    age: number;
    address: string;
    isMarried: boolean;
}

// manually create new type using union operator
type newType = "name" | "age" | "address" | "isMarried"; 

// keyof PersonType will create new type automatically
type newTypeUsingKeyOf = keyof PersonType;

const a: newTypeUsingKeyOf = "name"; 

// another example of keyof with function

function getProperty<X,Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
}

const property = getProperty({ name: "Hayes", age: 34, address: "Dhaka", isMarried: true }, "name");