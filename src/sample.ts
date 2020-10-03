// Generics
interface Result {
  a: number,
  b: number
}
interface FinalResult {
  a: number,
  b: number,
  c: string
}
class MyData<T extends Result> {// aとbさえ持っていればいい
  constructor(private _value: T) { }
  getArray(): T[] {
    return [this._value, this._value, this._value];
  }
}
// const v1 = new MyData<string>('hello');
// console.log(v1.getArray());
// const v2 = new MyData<number>(234);
// console.log(v2.getArray());
// const v3 = new MyData<FinalResult>({a: 22, b: 33});
// console.log(v3.getArray());
const v4 = new MyData<FinalResult>({a: 22, b: 33, c: 'hello world'});
console.log(v4.getArray());