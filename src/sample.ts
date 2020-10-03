// クラス
// public, protected, private

class User {
  /*
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  */
  constructor(private _name: string) { };
  sayHi(): void {
    console.log("hi! i am " + this._name);
  }
  get name() {
    return this._name;
  }
  set name (newValue: string) {
    this._name = newValue;
  }
}
const tom = new User('Tom');
// console.log(tom._name);// アクセスできない
console.log(tom.name); // getterで取得する
tom.name = "TOM";// setterで書き換える
console.log(tom.name);
tom.sayHi();