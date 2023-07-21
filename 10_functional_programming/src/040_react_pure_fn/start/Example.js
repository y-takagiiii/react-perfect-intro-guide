// Reactの関数コンポーネントは純関数で定義する
// propsを受け取ってJSXを返す純関数として定義する


// let value = 0;
// コンポーネント外で定義したvalueを使ってはいけない
// const Child = () => {
//   value++;
//   return <div>{value}</div>
// };

// propsを使って純関数として定義する
const ChildPure = ({ value }) => {
  value++;
  return <div>{value}</div>
};

const Example = () => {
  let value = 0;

  return (
    <>
      {/* <Child />
      <Child />
      <Child /> */}
      <ChildPure value={++value} />
    </>
  );
};

export default Example;
