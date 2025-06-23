/*
 Given the data, define the interface "User" and use it accordingly.

export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`); // This function is trying to log a user, but since it's typed as unknown, accessing user.name and user.age will raise TypeScript errors. 
}

console.log('Users:');
users.forEach(logPerson);

*/
// Define the User interface
export interface User {
  name: string;
  age: number;
  occupation: string;
}

// users is an array of User objects
export const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
];

// This function now accepts a user parameter of type User, so TypeScript knows user will have name and age properties.
//Return type is void because we are only printing to console, not returning a value
export function logPerson(user: User): void {
  console.log(` - ${user.name}, ${user.age}`);
}

// Output the user list
console.log('Users:');
users.forEach(logPerson);
