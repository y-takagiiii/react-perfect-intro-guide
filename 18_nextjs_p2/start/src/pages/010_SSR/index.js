import { useEffect, useState } from "react"

export default function SSR() {
  console.log("hello")
  const [state, setState] = useState('bye');
  const val = 0

  // windowオブジェクトはサーバー側(node.js)には存在しないため、
  // useEffectを使ってクライアント側で処理するようにする
  useEffect(() => {
    window.localStorage.setItem('key', 'val')
  }, []);

  // SSRではサーバー側で変数に値が格納された後のHTMLをクライアントに渡す
  return <h3>{state}</h3>
}