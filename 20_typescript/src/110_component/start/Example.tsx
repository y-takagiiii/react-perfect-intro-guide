// 関数コンポーネントに型を導入する
// const Example: React. FC = () => {
//     return <h1>Hello TypeScript</h1>
// };

// export default Example;

import Hello from "./Hello";

const Example: React.FC = () => {
    return <Hello />
}

export default Example;
