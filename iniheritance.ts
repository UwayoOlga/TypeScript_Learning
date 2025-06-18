// Define the Parent Class
function Animal(this: Animal, name: string) {
    this.name = name;
  }
  
  Animal.prototype.move = function(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  };
  
  // Define the Child Class
  function Snake(name: string) {
    Animal.call(this, name);
  }
  
  // Set up the Inheritance
  Snake.prototype = Object.create(Animal.prototype);
  Snake.prototype.constructor = Snake;
  
  // Override the Base Type's Method
  Snake.prototype.move = function(distanceInMeters = 5) {
    console.log("Slithering...");
    Animal.prototype.move.call(this, distanceInMeters);
  };
  
  const mySnake = new Snake("Cobra");
  mySnake.move();  // Output: Slithering... Cobra moved 5m.