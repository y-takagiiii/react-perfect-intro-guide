// プロップスの型定義
type HelloProps = {
  text: string,
  children?: React.ReactNode // React18からはchildrenの型を明示的にする必要がある
}
// ジェネリクスの型パラメータとしてHelloPropsを渡す
const Hello: React.FC<HelloProps> = (props) => {
  return <h1>Hello {props.text}! {props.children}</h1> // props.childrenはHelloコンポーネントのタグで囲まれた部分
}

type FnProps = {
  fn: (text: string) => void
} 

export const Btn: React.FC<FnProps> = (props) => {
    return <button onClick={() => props.fn('TypeScript')}>ボタン</button>
}

export default Hello;