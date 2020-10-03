// 静的メンバ
class User {
  constructor(protected _name: string) { 
    User.count++;
  };
  sayHi(): void {
    console.log("hi! i am " + this._name);
  }
  static count: number = 0;
  static showDescription(): void {
    console.log('this class is about users');
  }
}
const tom = new User('Tom');
const bob = new User('Bob');
console.log(User.count);
User.showDescription();