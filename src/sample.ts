// 関数のオーバーロード
// 同じ名前の関数を宣言できる

function add(a: number, b: number): number; // シグネチャ
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
  return a + b;
}
console.log(add(5, 3));
console.log(add("hello", "world"));
// console.log(add("hello", 3));// オーバーロードできない