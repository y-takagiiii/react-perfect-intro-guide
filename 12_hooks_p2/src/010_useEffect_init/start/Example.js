import { useState, useEffect } from 'react'

const Example = () => {
  const [time, setTime] = useState(0);

  // 再レンダリングされるたびにsetTimeが実行されるのでタイマーがバグる
  // window.setInterval(() => {
    //   setTime(prev => prev + 1);
    // }, 1000)

    // 解決策としてuseEffectを使う
  useEffect(() => {
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000)
  }, [])

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
    </>
  );
};

export default Example;
