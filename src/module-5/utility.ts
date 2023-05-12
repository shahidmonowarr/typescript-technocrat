// Pick
// Pick is a utility type that takes two arguments. The first argument is the type from which we want to pick properties. The second argument is a string literal with the name of the property we want to pick. We can also pick multiple properties by separating them with a pipe (|) symbol. Using the Pick utility type, we can create a new type that contains only the properties we want to expose to the outside world. Let’s see an example of how to use the Pick utility type.

interface Person {
    name: string;
    email?: string;
    contact: number;
}

// type Email = Pick<Person, "email">;
type Contact = Pick<Person, "contact" | "email">;
// here Contact type will have only email and contact properties.

//Omit
// Omit is a utility type that takes two arguments. The first argument is the type from which we want to omit properties. The second argument is a string literal with the name of the property we want to omit. We can also omit multiple properties by separating them with a pipe (|) symbol. Using the Omit utility type, we can create a new type that contains all the properties except the ones we want to omit. Let’s see an example of how to use the Omit utility type.

type Name = Omit<Person, "name">;
// here Name type will have only email and contact properties.

// Partial and Required
// To make all the properties of a type optional, we can use the Partial utility type. To make all the properties of a type required, we can use the Required utility type. Let’s see an example of how to use the Partial and Required utility types.

type Optional = Partial<Person>;
type RequiredPerson = Required<Optional>;

// Readonly
// To make all the properties of a type readonly, we can use the Readonly utility type. Let’s see an example of how to use the Readonly utility type.

type ReadonlyPerson = Readonly<Person>;

// const person: ReadonlyPerson = {
//     name: "John",
//     email: "john@gmail.com",
//     contact: 9876543210
// };

// // person.name = "Jane"; // error

// Record and index signature
// To create a type with a set of properties of a given type, we can use the Record utility type. Let’s see an example of how to use the Record utility type. 
// Index signature is a way to define a type for an object that has properties with dynamic names. Let’s see an example of how to use the index signature.

type PersonRecord = Record<"name" | "email" | "contact", string>;

// index signature

// type myObj = {
//     [key: string]: string;
// }

// difference between Record and index signature is that we can use literal types in Record utility type. like "name" | "email" | "contact

// using Record utility type
type myObj = Record<'a'|'b'|'c', string>;

const obj: myObj = {
    a: "a",
    b: "b",
    c: "c"
}