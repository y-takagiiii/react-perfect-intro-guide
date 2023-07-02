import { useState } from "react";

const Example = () => {
  let [countA, setCountA] = useState(0);
  let [countB, setCountB] = useState(10);
  let [countC, setCountC] = useState(100);

  return (
    <>
      <p>ボタンAを{countA}回押しました！</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >ボタンA
      </button>
      <p>ボタンBを{countB}回押しました！</p>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >ボタンB
      </button>
      <p>ボタンCを{countC}回押しました！</p>
      <button
        onClick={() => {
          setCountC(countC + 1);
        }}
      >ボタンC
      </button>
    </>
  );
};

export default Example;
