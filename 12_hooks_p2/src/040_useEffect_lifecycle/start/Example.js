import { useState, useEffect } from 'react';

const Example = () => {
  const [state, setState] = useState(0);

  useEffect(
    function update() {
      console.log("update"); // ②

      return function cleanUp() {
        console.log("update cleanup");
      };
    }, [state] // 依存配列にstateが入ってる -> stateが更新されたときにupdate()関数が実行される
  );

  useEffect(() => {
    console.log("mount"); // ③

    return () => {
      console.log("mount cleanup");
    };
  }, []);

  console.log("render"); // ①

  return (
    <>
      <button onClick={() => setState((prev) => prev + 1)}>更新</button>
    </>
  );
};

export default Example;
