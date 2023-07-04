import { useState } from "react";
import styled from "styled-components";
console.dir(styled);
const StyledButton = styled.button`
/* タグ付きテンプレート ^^^^^^^^^^^^^^^ */
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  /* styled componentにはpropsも渡せる */
  /* propsを受け取りたい部分を関数にする */
  background: ${({ isSelected }) => isSelected ? 'pink' : ''};
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler} >ボタン</StyledButton>
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
