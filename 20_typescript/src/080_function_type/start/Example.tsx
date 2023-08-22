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

  const sum2 = (x: number, y: number) =>  x + y;
};

export default Example;
