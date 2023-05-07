// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

// Solution

interface Person2 {
    name: string;
    age: number;
    email: string;
  }
  
  function findPersonByEmail(people: Person2[], email: string): Person2 | null {
    for (const person of people) {
      if (person.email === email) {
        return person;
      }
    }
    return null;
  }
  
  // Example usage:
  const people: Person2[] = [
    { name: "Munna", age: 30, email: "munna@example.com" },
    { name: "Babu", age: 40, email: "babu@example.com" },
    { name: "Rubel", age: 50, email: "rubel@example.com" },
  ];
  
  const personWithEmail = findPersonByEmail(people, "rubel@example.com");
  console.log(personWithEmail); // Output: { name: "Rubel", age: 50, email: "rubel@example" }
  
  const nonExistentPerson = findPersonByEmail(people, "dada@example.com");
  console.log(nonExistentPerson); // Output: null
  