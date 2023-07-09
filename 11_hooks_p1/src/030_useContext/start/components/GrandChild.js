import { useContext } from 'react';
import { MyContext } from '../Example';

const GrandChild = () => {
  // useContextで受け取る
  const value = useContext(MyContext)

  return (
      <div style={{ border: "1px solid black" }}>
        <h3>孫コンポーネント</h3>
        {value}
      </div>
  );
};
export default GrandChild;
