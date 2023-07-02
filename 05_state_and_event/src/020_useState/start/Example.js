import { useState } from "react";

const Example = () => {
  // let valArray = useState();

  // useState 配列の0番目に参照用の値、1番目に更新用の関数が渡ってくる
  // 分割代入を使う
  let [val, setVal] = useState();
  // console.log(valArray);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          // const setFn = valArray[1];
          setVal(e.target.value)
        }} /> = {val}
    </>
  );
};

export default Example;
