/*
2. **Task:** Define an abstract class `Shape2D`:
    - Abstract method `area(): number`;
    
    Then implement:
    
    - `Circle` subclass (property: `radius`);
    - `Rectangle` subclass (properties: `width`, `height`);
    
    Constructors should initialize properties, and `area()` should return correct values.
     */
    // Abstract Base Class
abstract class Shape2D {
  abstract area(): number;
}
 
class Circle extends Shape2D {
  constructor(public radius: number) {
    super(); // super() must be called in the constructors because Circle and Rectangle extend the abstract base class
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
 
class Rectangle extends Shape2D {
  constructor(public width: number, public height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}
 
const shapes: Shape2D[] = [
  new Circle(5),
  new Rectangle(4, 6),
];

shapes.forEach((shape, i) =>
  console.log(`Shape ${i + 1} area: ${shape.area().toFixed(2)}`)
);
