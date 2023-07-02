import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  // nameプロパティだけを変更する
  // stateで管理しているオブジェクトと同じ構造で更新する必要がある
  const changeName = (e) => {
    setPerson({ name: e.target.value, age: person.age })
  }
  // ageプロパティだけを変更する
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value })
  }

  const reset = () => {
    setPerson({ name: "", age: "" })
  }

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input
        type="text"
        value={person.name}
        onChange={changeName}
      />
      <input
        type="number"
        value={person.age}
        onChange={changeAge}
      />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
