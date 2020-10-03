// 関数
// function add(a: number, b: number): number {
//   return a + b;
// }

function add(a: number, b?: number): number|undefined {
  // return a + b;// コンパイルエラーになる
  if (b) {
    return a + b;
  }
}
// b ? b: number|undefinedになる
console.log(add(5, 3));
console.log(add(5));

// 関数式(アロー関数)
const diff = (a: number, b: number): number => a - b;
console.log(diff(1, 2));