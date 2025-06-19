//Write a function that takes a name (string) and age (number) and returns a sentence like:
//"Olga is 22 years old."

function describePerson(name: string, age: number): string {
  return `${name} is ${age} years old.`;
}
const message = describePerson("Olga", 21);
console.log(message);   
