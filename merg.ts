/*
Write a function merge that combines two objects into one. 
Ensure that the result is strongly typed as the combination of both input types.*/

function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const merged = merge({ name: "Olga" }, { age: 22 });
console.log(merged.name); 
console.log(merged.age);  
