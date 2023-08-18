// プリミティブとはTypeScriptが扱うことのできる基本的な値のこと
// 文字列、数値、巨大な数値、真偽値、null、undefinedなど

const Example = () => {
  // 練習用
  let str: string = 'Hello';
  // str = 1; // 変数strにstring型以外の値は代入できない
  str = "Bye";
  console.log(str);

  let num: number = 102;
  console.log(num);

  let bignum: bigint = 103n;
  console.log(bignum);

  let bool: boolean = false;
  console.log(bool)

  let nullish: null = null;
  console.log(nullish)

  let undefinedValue: undefined = undefined;
  console.log(undefinedValue)

  // リテラル型
  let trueVal: true = true; // trueValにはtrueしか代入できない
  let num123: 123 = 123; // num113には123しか代入できない
  let strHello: 'Hello' = 'Hello'
};

export default Example;
