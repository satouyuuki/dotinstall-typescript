// 列挙型->わかりやすく定数を表現できる
enum Signal {
  Red,
  Blue,
  Yellow
}
// enum Signal {
//   Red = 0,
//   Blue = 1,
//   Yellow = 2
// }

const signal: Signal = 2;

if (signal === Signal.Red) {
  console.log('赤');
}
if (signal === Signal.Blue) {
  console.log('青');
}
if (signal ===Signal.Yellow) {
  console.log('黄色');
}