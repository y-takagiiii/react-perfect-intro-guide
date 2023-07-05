import { useRef, forwardRef } from "react";

// propsでrefは渡せない
// forwardRefの引数として関数コンポーネントを渡す
// ただし、別のコンポーネントにrefを渡すことは依存関係が複雑になるので、なるべく避ける
const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      {/* Exampleコンポーネント内で定義したrefをInputコンポーネントに渡す */}
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
