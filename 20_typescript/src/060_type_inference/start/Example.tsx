const Example = () => {
  // TypeScriptでは型推論(type inference)によって型をある程度推論してくれる機能がある
  // 基本亭には明らかに型がわかるような場合の型定義は型推論に任せるようにする

  // let str: string = 'hello';
  // 上記のように明示しなくても型定義してくれる
  let str = 'hello';
  // str = 123; // エラーになる

  // オブジェクトもある程度型推論してくれる
  let obj = { name: 'Taro', age: 10 };

  // constで定義した変数の型はリテラル型になる
  const bye = "bye";
  const num = 123;
};

export default Example;
