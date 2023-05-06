//What will be the type of the fullName function?

interface Person {

    firstName: string;
  
    lastName: string;
  
  }
  
  function fullName<T extends Person>(person: T): string {
  
    return `${person.firstName} ${person.lastName}`;
  
  }