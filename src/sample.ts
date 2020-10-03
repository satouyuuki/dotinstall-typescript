// Interface
// 構造的部分型
function getTotal(result: Result) {
  return result.a + result.b;
}

interface Result {
  a: number,
  b: number
};

const result = {
  a: 32,
  b: 58, 
  c: 'hello'
};

console.log(getTotal(result));