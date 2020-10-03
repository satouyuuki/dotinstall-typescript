// Interface
interface SpringResult {
  a: number;
}
interface FallResult {
  b: number;
}
interface FinalResult extends SpringResult, FallResult {
  final?: number;
}
function getTotal(result: FinalResult): number {
  if (result.final) {
    return result.a + result.b + result.final;
  } else {
    return result.a + result.b;
  }
}

const result = {
  a: 32,
  b: 33,
}
// const result = {
//   a: 32,
//   b: 33,
//   final: 100
// }
console.log(getTotal(result));
