class Person {
    constructor (public name: string, public age: number){}
    private secretID: string = Math.random().toString(36).substring(2, 8);
    greet(): void{
        console.log(`Hi, I'm ${this.name} and my private ID is ${this.secretID}`);
    }
    static create (name: string, age: number): Person {
        return new Person(name, age);
    }
}
const olga = new Person("Olga", 25);
olga.greet();
console.log(olga instanceof Person);
const bob = Person.create("Bella", 40);