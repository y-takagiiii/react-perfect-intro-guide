import { useEffect, useState } from "react"

// 下のgetServerSideProps関数が返すpropsオブジェクトのmessageキーを分割代入で引数として取得
export default function SSR({ message }) {
  console.log("hello")
  console.log(message)
  const [state, setState] = useState('bye');
  const val = 0

  // windowオブジェクトはサーバー側(node.js)には存在しないため、
  // ブラウザ上の処理はuseEffectを使ってクライアント側で処理するようにする
  useEffect(() => {
    // node.jsのログにはuseEffect内のconsole.logは出力されない
    console.log('useEffect')
    window.localStorage.setItem('key', 'val')
    document.cookie = 'val=0; path=/;'
  }, []);

  // SSRではサーバー側で変数に値が格納された後のHTMLをクライアントに渡す
  return <h3>{state}</h3>
}

// node.js上で実行される関数
// 引数contextにはリクエストとレスポンスの情報が渡ってくる
export async function getServerSideProps(context) {
  // contextからcookie情報を取得することもできる
  const { cookie } = context.req.headers;
  console.log('cookie', cookie)
  console.log("getServerSideProps executed")

  return {
    // redirectオブジェクトを渡してリダイレクトさせることもできる
    // redirect: {
      //   destination: '/',
      //   permanent: false
      // },
    // propsオブジェクトが上のfunction SSRの引数に渡される
    props: { message: 'From Server Side Props' }
  }
}