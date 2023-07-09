import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* Linkコンポーネントでリンクを作成 */}
      <Link href="/07_router">
      {/* オブジェクトで指定もできる */}
      {/* <Link href={{ pathname: "/07_router", query: { key: 'value' } }}> */}
      {/* as属性は動的ルーティングの際に使われる。特定のパターンを持つURLを1つのページコンポーネントで処理したい時(パスの一部が動的に変化する、投稿が固有のidを持つ時)に使う */}
      {/* <Link href="/07_router" as="/dummy-url"> */}
        <a>/07_router</a>
      </Link>
      <Link href="07_router/hello/setting">
        <a>/07_router</a>
      </Link>
    </>
  );
}