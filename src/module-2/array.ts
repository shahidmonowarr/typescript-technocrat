const names: string[] = ["John", "Jane", "Mary"];
const ages: number[] = [20, 30, 40];

ages.map((age => age.toString()))

// typescript tuple type
const person: [string, number] = ["John", 20];
person[0] = "Jane";
person[1] = 30;