/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = () => {
  // const fn = () => hello;
  const a = 1;
  // if(true) {'hello'}
  for(let i = 0; i < 5; i++) {

  }
  return (
    <div className="component">
      <h3>式と文</h3>
      {a}
    </div>
  );
};

export default Child;
