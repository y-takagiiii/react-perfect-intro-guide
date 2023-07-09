import Head from "next/head";
import Script from 'next/script';
import { useState } from 'react';

export default function Page() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <Head>
        <title>ページのタイトル</title>
        <meta property="og:title" content="ページのタイトル" />
      </Head>
      <Script
        // デフォルトはdata-nscript="afterInteractive"、モードを変更する場合はstrategyプロパティを指定
        // beforeInteractiveはサーバーから送信された段階でscriptタグが含まれる、afterInteractiveはNext.jsのscriptが読み込まれてからこのファイル内のscriptが読み込まれる
        // strategy="beforeInteractive"
        // ブラウザの処理に空きが出た場合にscriptを読み込む
        // strategy="lazyOnLoad"
        src="/jquery-3.2.1.min.js"
        onLoad={() => setLoad(true)}
        onError={e => { console.error(e) }}
      />
      <h3>jQuery loaded: {load ? "true" : "false"}</h3>

      {/* inline script */}
      <Script dangerouslySetInnerHTML={{
        __html: `console.log('Inline Script')`
      }} />
    </>
  )
}