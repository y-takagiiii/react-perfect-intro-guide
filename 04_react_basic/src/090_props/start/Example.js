import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  return (
    <>
      <Child
        color="red"
        num="123"
        fn={hello}
        bool
      />
      <Child color="blue" />
      <Child />
    </>
  )
};

export default Example;
