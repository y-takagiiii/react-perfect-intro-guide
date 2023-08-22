const Example = () => {
  // ジェネリクスとは、型引数(type parameters)を受け取る関数を作る機能のことを指す
  // 文字列を格納する配列を作る関数
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }
  const strArray = repeatStr("hello", 3);
  console.log(strArray); // => ['hello', 'hello', 'hello']

  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }
  const numArray = repeatNum(8, 3);
  console.log(numArray); // => [8, 8, 8]

  // ジェネリクスを使って型の安全性と保ちつつコードの共通化を図ることができる
  const repeat = <T>(value: T, times: number): T[] => { // <T, U>のように複数渡すこともできる
    return new Array(times).fill(value);
  }
  const genericsNumArray = repeat<number>(10, 4); // Tの部分がnumberになる
  const genericsStrArray = repeat<string>('generics', 5);
  console.log(genericsNumArray) // => [10, 10, 10, 10]
  console.log(genericsStrArray) // => ['generics', 'generics', 'generics', 'generics']
};

export default Example;
