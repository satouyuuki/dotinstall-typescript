// クラスの継承
class User {
  constructor(protected _name: string) { };
  sayHi(): void {
    console.log("hi! i am " + this._name);
  }
}
class AdminUser extends User {
  private _age: number
  constructor(_name: string, _age: number) {
    super(_name);
    this._age = _age;// setter使わなくても大丈夫
  }
  public sayHi(): void {
    console.log('my age: ' + this._age);
    console.log('my name: ' + this._name);
    super.sayHi();
  }
}
const admin = new AdminUser('tom', 25);
console.log(admin.sayHi());