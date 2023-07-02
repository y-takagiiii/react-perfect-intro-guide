import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  // console.log(nums);

  // shuffle関数で配列の最後の値を最初に持ってくる
  const shuffle = () => {
    // numsを新しい配列に変換
    const newNums = [ ...nums ];
    const value = newNums.pop();
    newNums.unshift(value);
    setNums(newNums);
  }
  return (
    <>
      <h1>
        { nums }
      </h1>
      <button
        onClick={shuffle}
      >shuffle</button>
    </>
  );
};

export default Example;
