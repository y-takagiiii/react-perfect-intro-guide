import Child from "./components/Child";
import { createContext } from 'react';

// コンテキスト作成
export const MyContext = createContext('hello');

// ExampleコンポーネントからGrandChildコンポーネントへpropsを渡すときはExample→Child→GrandChildと渡す必要がある(propsのバケツリレー)が
// useContextを使うとExample→GrandChildと渡すことができる
const Example = () => {
  const value = 'hello'
  return <Child />;
};

export default Example;
