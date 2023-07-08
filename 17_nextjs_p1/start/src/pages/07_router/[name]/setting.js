// Next.jsの機能を使う方法
export default function Setting ({ query }) {
  return <h1>nextで取得 {query.name}</h1>
}

// getServerSideProps関数を使ってパスの情報を取得する
export async function getServerSideProps(context) {
  // console.log(context.query);
  const { query } = context;
  return {
    props: { query }
  }
}

// 分割代入で書き換え
// export async function getServerSideProps({ query }) {
//   return {
//     props: { query }
//   }
// }

// React HooksのuseRouterを使う方法
// import { useRouter } from 'next/router'

// export default function Setting ({ query }) {
//   // トップレベルでrouterを宣言
//   const router = useRouter();
//   return <h1>routerから取得 {router.query.name}</h1>
// }

// export async function getServerSideProps({ query }) {
//   return {
//     props: { query }
//   }
// }