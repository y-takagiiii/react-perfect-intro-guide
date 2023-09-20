// ファイル名を[]で囲った場合は、リクエストされたパスに応じて動的にページを生成する「ダイナミックルーティング」を行うファイルになる
import { useRouter } from "next/router"

export default function Page({ id }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading...</h3>
  }
  return <h3>このページは{id}です。</h3>
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" }}, { params: { id: "2" }}],
    // fallbackオプション: 想定外のパラメータを指定された場合、どういった挙動にするかどうか
    // pathsプロパティで設定したパラメータ以外にアクセスした場合、404ページを返す
    // fallback: false

    // pathsプロパティで設定したパラメータ以外にアクセスした場合、サーバー側でgetStaticProps関数を呼び出して動的にページを生成する
    fallback: true

    // 基本的にはtrueと同じだが、サーバー側で完全なHTMLが生成されるまでHTMLを返さない
    // つまり、Loading...は表示されず、このページは○ですと表示される
    // fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id
    }
  }
}