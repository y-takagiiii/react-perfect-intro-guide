import React from "react";

const Example = () => {
  // JSXはあくまでJavaScriptとして扱うので変数に代入可能
  const sample1 = <h1 className="greeting">Hello World</h1>;
  // 出力可能
  // console.log(sample1);
  // console.log((<h1 className="greeting">Hello World</h1>));

  // JSXはBabelを通してJavaScriptオブジェクトに変換される
  // console.log(React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World"));

  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  // Babelで変換
  // React.createElement("div", null,
  //   React.createElement("h1", null, "Hello!"),
  //   React.createElement("h2", null, "Good to see you.")
  // );

  // オブジェクトなのでpropsも確認できる
  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );
};

export default Example;
