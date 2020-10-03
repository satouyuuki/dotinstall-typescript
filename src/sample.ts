// Interface + Class
interface GameUser {
  score: number;
  showScore(): void;
}

class User implements GameUser{
  constructor(private _name: string, private _score: number) {
  }
  sayHi(): void {
    console.log('hi! i am ' + this._name);
  }
  showScore(): void {
    console.log('score is ' + this._score);
  }
  get name() {
    return this._name;
  }
  get score() {
    return this._score;
  }
}
const tom = new User('tom', 2);
console.log(tom.name);
tom.sayHi();