/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// const Child = (props) => {
const Child = ({ color: c = 'green' }) => {
  //           ^^^^^ 分割代入でも書ける { color }
  //                 デフォルト値も設定できる { color = 'green' }
  // 呼び出し先で渡したプロパティがpropsで受け取れる
  // console.log(props);
  return (
    <div className={`component ${c}`}>
      {/*                        ^^^^^^^^^^^ 分割代入の場合はcolor */}
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
