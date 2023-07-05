import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  // refオブジェクトを作成
  const inputRef = useRef();

  return (
    <div>
      <h3>ユースケース1</h3>
      {/* ref属性にinputRefをセット */}
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();

  return (
    <div>
      <h3>ユースケース2</h3>
      <video style={{ maxWidth: "100%" }} ref={videoRef}>
        <source src="./sample.mp4"></source>
      </video>
      <button onClick={() => {
        if(playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play(); 
        }
        setPlaying(prev => !prev);
      }}>
        { playing ? 'Stop' : 'Play' }
      </button>
    </div>
  );
};

// useRefもuseStateもどちらも値を保持しておきたいときに使う
// useRefは再レンダリングされない(関数コンポーネントが実行されない)、useStateは再レンダリングされる

const createTimeStamp = () => new Date().getTime();

const Case3 = () => {
  const [timeStamp, setTimeStamp] = useState(createTimeStamp());
  const ref = useRef(createTimeStamp());

  const updateState = () => {
    setTimeStamp(createTimeStamp());
  };

  const updateRef = () => {
    ref.current = createTimeStamp();
    console.log("ref.current ->", ref.current);
  };

  return (
    <div>
      <h3>ユースケース3</h3>
      <p>
        state: {timeStamp}
        <button onClick={updateState}>更新</button>
      </p>
      <p>
        ref: {ref.current}
        <button onClick={updateRef}>更新</button>
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
};

export default Example;
