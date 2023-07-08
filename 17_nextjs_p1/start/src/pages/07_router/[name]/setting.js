// Next.jsの機能を使う方法
// export default function Setting ({ query }) {
//   return <h1>nextで取得 {query.name}</h1>
// }

// // getServerSideProps関数を使ってパスの情報を取得する
// export async function getServerSideProps(context) {
//   // console.log(context.query);
//   const { query } = context;
//   return {
//     props: { query }
//   }
// }

// 分割代入で書き換え
// export async function getServerSideProps({ query }) {
//   return {
//     props: { query }
//   }
// }

// React HooksのuseRouterを使う方法
import { useRouter } from 'next/router'

export default function Setting ({ query }) {
  // トップレベルでrouterを宣言
  const router = useRouter();

  const clickHandler = () => {
    // ルートパスに遷移
    router.push('/')
    // 第二引数に別のurlを指定すると、同じページが表示されるがURLは第二引数のものになる
    // router.push('/', '/dummy-url')

    // 履歴が消える
    // アクセス制限したいページがあり、リダイレクト処理を行う場合に使う
    // router.replace('/', '/dummy-url');

    // 一つ前の画面に戻る
    // router.back()

    // 画面の更新
    // router.reload()
  }

  return (
    <>
      <h1>routerから取得 {router.query.name}</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  )
}

export async function getServerSideProps({ query }) {
  return {
    props: { query }
  }
}