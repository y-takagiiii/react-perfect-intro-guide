import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            // A ?? B null合体演算子 AがnullかundefinedのときにBを代入する
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          // オブジェクトリテラルは()で囲む、アロー関数の書き方とは異なることに注意
          .map((animal) => {
            // if (animal === "Dog") {
            //   return <li key={animal}>{animal}★</li>;
            // } else {
            //   <li key={animal}>{animal}</li>;
            // }

            // 三項演算子で書き換え
            // return <li key={animal}>{
            //   animal === "Dog"
            //     ? animal + "★"
            //     : animal
            //   }</li>;

            // &&で書き換え
            return <li key={animal}>
              {animal ?? "null,undefinedでした"}
              {animal === "Dog" && "★"}
            </li>;
          })}
      </ul>
    </>
  );
};

export default Example;
