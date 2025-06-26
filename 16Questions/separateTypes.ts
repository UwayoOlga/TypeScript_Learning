/*
You have an array that contains mixed data types: `(string | number)[]`. Write a function called `separateTypes` that takes this mixed array and returns an object with two properties:
    - `strings`: an array containing only the string values
    - `numbers`: an array containing only the number values
    
    Use proper type guards to check the types. 
    
    For example, if given `[1, "hello", 2, "world", 3]`, it should return `{ strings: ["hello", "world"], numbers: [1, 2, 3] }`.
 */function separateTypes(data: (string | number)[]) {
  const strings: string[] = [];
  const numbers: number[] = [];

  for (const item of data) {
    if (typeof item === 'string') {
      strings.push(item);
    } else if (typeof item === 'number') {
      numbers.push(item);
    }
  }

  return { strings, numbers };
}
