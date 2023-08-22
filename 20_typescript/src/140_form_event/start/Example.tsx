import { useState } from 'react';

type User = {
  name: string,
  age: number
}

type Todo = {
  id: number,
  text: string
}

const Example = () => {
  // 型推論が使える
  const [ text, setText ] = useState("hello");
  // 明示的に型を定義することもできる
  const [ animals, setAnimals ] = useState<string[]>(["dog", "cat"]);
  const [ users, setUsers ] = useState<User[]>([{name: 'Tom', age: 22}])

  const [ todos, setTodos ] = useState<Todo[]>([{id: 1, text: 'homework'}])
};

export default Example;
