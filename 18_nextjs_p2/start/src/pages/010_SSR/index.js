import { useEffect, useState } from "react"

export default function SSR() {
  console.log("hello")
  const [state, setState] = useState('bye');
  const val = 0

  // windowオブジェクトはサーバー側(node.js)には存在しないため、
  // ブラウザ上の処理はuseEffectを使ってクライアント側で処理するようにする
  useEffect(() => {
    // node.jsのログにはuseEffect内のconsole.logは出力されない
    console.log('useEffect')
    window.localStorage.setItem('key', 'val')
  }, []);

  // SSRではサーバー側で変数に値が格納された後のHTMLをクライアントに渡す
  return <h3>{state}</h3>
}