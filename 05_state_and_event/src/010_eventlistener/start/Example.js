const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。');
  }
  const clickHandler2 = () => {
    console.log('ボタンがクリックされました');
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
      {/* JSX内にJSを書きすぎると可読性下がる */}
      {/* <button onClick={() => {
        alert('アロー関数でもOK');
      }}>
        クリックしてね
      </button> */}
    </>
  );
};

export default Example;
