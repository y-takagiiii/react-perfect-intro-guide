function fn(number) {
  return number * 2;
}
console.log(fn(2));


// 上の関数式による関数宣言をアロー関数で書き換え
// const fnArrow = (number) => {
//   return number * 2;
// }

// 引数が1つの場合は()を省略可
// const fnArrow = number => {
//   return number * 2;
// }

// 本文の処理が1行の場合は{}とreturnを省略可
// const fnArrow = number => number * 2;

const fnArrow = number => {
  console.log(number);
  return number * 2;
}
console.log(fnArrow(2));

// 戻り値がオブジェクトの場合(オブジェクトリテラル)とする
const fnArrowObj = number => ({result: number * 2})
console.log(fnArrowObj(2));
