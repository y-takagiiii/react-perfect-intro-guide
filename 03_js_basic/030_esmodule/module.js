// ESModuleとはES2015で策定されたJSファイルから別のJSファイルを読み込む仕組み

// hello関数が外部からアクセス可能になる
export const hello = () => {
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};
// 1ファイル内で1つだけdefault exportを定義できる
// 読み込み方法が異なる
export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name);
  }
}
// 名前付きexport Userクラスがクラスが外部からアクセス可能になる
export { User }
