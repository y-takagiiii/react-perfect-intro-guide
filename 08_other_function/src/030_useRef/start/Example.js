import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  // refオブジェクトを作成
  const inputRef = useRef();

  return (
    <div>
      <h3>ユースケース1</h3>
      {/* refプロパティにinputRefをセット */}
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
