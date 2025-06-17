/*
Write a TypeScript function log that:

If passed a string, logs it in uppercase.

If passed a number, logs it as-is.

If passed an array of strings, logs each string on a new line.*/

function log(value: string): void;
function log(value: number): void;
function log(value: string[]): void;
function log(value: any): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value);
  } else if (Array.isArray(value)) {
    value.forEach(v => console.log(v));
  }
}
