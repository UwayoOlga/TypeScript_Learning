abstract class Shape {
    readonly name: string;

    constructor(name: string = "Random Shape"){
        this.name = name;
    }
    abstract area(): number;
    describe(): void{
        console.log('This is a ${this.name}.');
    }
}
class Circle extends Shape {
    constructor(private radius: number){
        super("Circle");
    }
    area(): number{
        return Math.PI * this.radius ** 2;
    }
}
const myCirle = new Circle(5);
myCirle.describe();
console.log(`Circle area: ${myCirle.area()}`);