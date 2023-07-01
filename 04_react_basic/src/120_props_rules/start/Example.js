import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  // POINT propsの流れは一方通行
  // 基本的に親コンポーネントから子コンポーネントに渡して使用する
  const name = 'Tom';
  return (
    <>
      <Hello name={name} />
      <Bye name={name}/>
    </>
  );
};

export default Example;
