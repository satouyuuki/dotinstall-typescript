// Generics

// function getArray(value: number|string): (number|string)[] {
//   return [value, value, value];
// }

function getArray<T>(value: T/*Type*/): T[] {
  return [value, value, value];
}
console.log(getArray<number>(3));
console.log(getArray<string>('hello'));