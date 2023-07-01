const Hello = (props) => {
  // POINT propsは読み取り専用
  const desc = Reflect.getOwnPropertyDescriptor(props, 'name');
  console.log(desc);
  // => Object
  /*
  { configurable: false  }
  { enumerable: true }
  { value: "Tom" }
  { writable: false } 書き換え不可
  */
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;