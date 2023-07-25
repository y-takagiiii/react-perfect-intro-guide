import { useEffect, useState } from "react";

const Example = () => {
  const [isDisplay, setIsDisplay] = useState(true);

  return (
    <>
      {/* isDisplayがtrueのときTimerコンポーネントを返す */}
      {isDisplay && <Timer />}
      <button onClick={() => setIsDisplay(prev => !prev)}>トグル</button>
    </>
  );
}

const Timer = () => {
  const [time, setTime] = useState(0);

  // useEffect(() => {
  //   console.log('init');
  //   window.setInterval(() => {
  //     setTime(prev => prev + 1);
  //   }, 1000);
  //   // 依存配列を渡さなかった場合、Timerコンポーネントが消えるときにreturn内の処理が行われる
  //   return () => {
  //     console.log('end');
  //   }
  // }, [])

  // クリーンナップを使ってタイマーを止める
  useEffect(() => {
    let intervalId = null;
    intervalId = window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    // 依存配列を渡さなかった場合、Timerコンポーネントが消えるときにreturn内の処理が行われる
    return () => {
      window.clearInterval(intervalId);
    }
  }, [])

  useEffect(() => {
    console.log('updated');
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time);
    // 依存配列にtimeを渡した場合、timeが更新されるたびにreturn内のコールバック関数が呼び出され、その後useEffect内の刻子バック関数が呼び出される
    // クリーンナップ：useEffectで実行した処理の後始末をreturn内の関数で行う
    return () => {
      console.log('updated end');
    }
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
