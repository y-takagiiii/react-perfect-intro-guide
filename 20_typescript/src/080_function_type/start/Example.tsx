const Example = () => {
  // TSでは、関数の引数に明示的に型情報を加える必要がある
  function sum1(x: number, y: number) {
    return x + y;
  }
  const result1 = sum1(1, 2);
  console.log(result1)

  // デフォルト値の設定
  // function sum1(x: number, y: number = 1) {
  //   return x + y;
  // }
  // const result1 = sum1(1);
  // console.log(result1) // => 2

  // 引数を任意にする
  // function sum1(x: number, y?: number) {
  //   return x + y;
  // }
  // const result1 = sum1(1);
  // 2つ目の引数を省略するとyはundefinedになる
  // 1 + undefined は NaN(Not a Number)
  // console.log(result1) // => NaN

  // TSでは、関数の戻り値には型推論が働く
  // const sum2 = (x: number, y: number) =>  x + y;

  // 明示的に型を示す場合
  const sum2 = (x: number, y: number): number =>  x + y;
  const result2 = sum2(10, 20)
  console.log(result2)

  // 戻り値がない場合の型定義
  const nothing = (num1: number, num2: number): void => {
    console.log(num1)
    console.log(num2)
  }

  // 関数の型エイリアス
  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
  const result3 = sum3(4, 5)
  console.log(result3)
};

export default Example;
