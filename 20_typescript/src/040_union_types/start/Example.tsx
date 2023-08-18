const Example = () => {
  // 練習用
  let strOrNum: string | number = 'Hello'
  strOrNum = 123
  console.log(strOrNum)

  let strOrNumOrBool: string | number | boolean = 'Hello'
  strOrNumOrBool = false
  console.log(false)

  let helloOrNumOrBoolOr: 'Hello' | number | boolean = 'Hello'
  // helloOrNumOrBoolOr = 'Bye' // 'Hello'、数値、真偽値しか代入できない
  console.log(helloOrNumOrBoolOr)

  // 変数宣言前に型を定義しておく
  type HelloOrNum = 'Hello' | number;
  const hello: HelloOrNum = 'Hello';

  type DayOfWeek =
    | 'Monday' // 見栄えのために意味のないパイプを書くこともある
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'
  const day: DayOfWeek = 'Friday'
};

export default Example;
