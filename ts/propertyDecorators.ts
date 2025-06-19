function LogProperty(target: any, propertyKey: string) {
  console.log(`Decorating property: ${propertyKey} on target:`, target);
}

class Product {
  @LogProperty
  name: string;

  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const product = new Product("Laptop", 1200);