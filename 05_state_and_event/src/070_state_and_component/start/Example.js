import { useState } from "react";

const Example = () => {
  // とぢらのCountコンポーネントを表示するか切り替えるためのフラグを用意
  const [ toggle, setToggle ] = useState(true);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  };
  return (
    <>
      <button
        onClick={toggleComponent}
      >Toggle</button>
      {/* このままだとReact要素のツリー構造が同じ位置にあるためstateを引き継いでしまう */}
      {/* {toggle ? <Count title="A" /> : <Count title="B" />} */}
      {/* keyをセットして解決 */}
      {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
    </>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
