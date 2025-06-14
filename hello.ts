function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

const userName = "Olga";
console.log(greet(userName));

let value: unknown;

value = 10;         // OK
value = "test";      

if (typeof value === "string") {
  console.log(value.toUpperCase());  // OK after type check
}
