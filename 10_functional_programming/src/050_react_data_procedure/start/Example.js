import { useState } from "react";

const Example = () => {
  // stateの管理をreactに任せ、exampleコンポーネントはあくまでJSXを返すための関数コンポーネント -> 状態管理と処理を分離している
  const [ state, setState ] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
