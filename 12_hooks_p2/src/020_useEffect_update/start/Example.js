import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('useEffect is called');
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }, [])

  // useEffectの第二引数[]は依存配列と呼ばれる
  // 依存配列に含めたstateが更新されると第一引数のコールバック関数が実行される -> timeが更新されるとupdatedが出力される
  // 依存配列が空の場合はExampleコンポーネントが生成されたときのみコールバック関数が実行される
  // useEffect(() => {
  //   console.log('updated');
  // }, [time])

  // 1秒ごとにページのタイトルを変更し、ローカルストレージにキーを保存する
  useEffect(() => {
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);
  }, [time])

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
