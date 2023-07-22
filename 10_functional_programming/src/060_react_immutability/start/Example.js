import { useState } from "react";

// 関数型(純粋関数)
// fn(決まった引数) -> 決まった戻り値
// 関数外の状態は参照・変更しない
// 関数外に影響を及ぼさない
// 引数で渡された値を変更しない
// これらの要件を満たさない操作は「副作用」と呼ばれる

const Child = ({ state, setState }) => {
  // 引数で渡された値を変更しない
  // props.state = { value: 1 }
  // propsの値を変更したい場合は親コンポーネントからstateを更新する関数を渡す
  // setState({ value: 1 })

  const increment = () => {
    // setState(prev => ({ value: prev.value + 1 }))
    setState(prev => {
      const newState = { value: prev.value + 1 }
      return newState;
    })
  }
  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        {/* 更新用関数も渡す */}
        <Child state={state} setState={setState } />
      </div>
    </>
  );
};

export default Example;
