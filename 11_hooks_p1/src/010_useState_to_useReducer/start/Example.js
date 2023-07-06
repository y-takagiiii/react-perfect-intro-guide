import { useState, useReducer } from 'react';

const Example = () => {
  // useStateでの書き方
  const [state, setState] = useState(0);

  const countUp = () => {
    // setState(prevstate => {
    //   return prevstate += 1;
    // });

    // 省略形
    setState(prev => ++prev);
  };

  // useReducerでの書き方
  // 第一引数に状態を更新する関数、第二引数に初期値
  const [rstate, dispatch] = useReducer((prev, { type }) => {
    // if(action === '+') {
    //   return ++prev;
    // } else if (action === '-') {
    //   return --prev;
    // }

    // switchで書くことが多い
    switch(type) {
      case '+':
        return ++prev;
        case '-':
          return --prev;
          default:
            throw new Error('不明なactionです。')
    }
  }, 0);

  const rcountUp = () => {
    // useReducerに渡した第一引数の関数が実行される
    dispatch({ type: "+" });
  };
  const rcountDown = () => {
    // useReducerに渡した第一引数の関数が実行される
    dispatch({ type: "-" });
  };


  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
