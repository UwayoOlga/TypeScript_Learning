 /*

Intro:

    Since we already have some of the additional
    information about our users, it's a good idea
    to output it in a nice way.

Exercise:

    Fix type errors in logPerson function.

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

*/
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
/*
export function logPerson(person: Person) {
    let additionalInformation: string;
    if (person.role) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// In the union type Person = User | Admin, TypeScript doesn't know whether person is a User or an Admin, so directly accessing person.role or person.occupation without narrowing causes an error.
*/

export function logPerson(person: Person) {
    let additionalInformation: string;

    if ('role' in person) {
        // person is Admin here
        additionalInformation = person.role;
    } else {
        // person is User here
        additionalInformation = person.occupation;
    }

    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
