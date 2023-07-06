import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  // console.log('リレンダリング'); // => +ボタンを押したときに、リレンダリングされていないことが分かる

  const countUp = () => {
    setCount((prevstate) => {
      // const newState = { ...prevstate }
      // newState.val += 1;

      // プロパティがval1つだけなので、わざわざスプレッド演算子で展開してあげなくてもいい
      const newState = { val: prevstate.val + 1 };
      newState.val += 1;
      return newState;
    });
  };

  return (
    <>
      <p>現在のカウント数: {count.val}</p>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;
