import { useRef, forwardRef, useImperativeHandle } from "react";

// useImperativeHandle

const Input = forwardRef((props, ref) => {

  const inputRef = useRef();
  // オブジェクトを返す ({})もしくは{return()}
  useImperativeHandle(ref, () => ({
    myFocus() {
      inputRef.current.focus();
    }
  }))

  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
