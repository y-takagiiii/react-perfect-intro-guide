
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // あまり使わない
  // forは文なのでreturnの中(JSX)で使えない
  // const animalList = [];
  // for(const animal of animals) {
  //   animalList.push(<li>{animal}</li>)
  // }

  // 一般的にはmapを使う
  const helloAnimals = animals.map((animal) => <li>Hello, {animal}</li>);

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* {animalList} */}
        {helloAnimals}
        {/* 式はJSXとして扱える */}
        {/* {animals.map((animal) => <li>Hello, {animal}</li>)} */}
      </ul>
    </>
  );
};

export default Example;
