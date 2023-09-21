import { useRouter } from "next/router"
import Head from "next/head"
import Article from "../../components/article"
import axios from "axios";

const ENDPOINT = 'http://localhost:4030/articles';

export default function Detail({ article }) {
  const router = useRouter();
  if(router.isFallback) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <Article data={article} />
    </>
  );
}

export async function getStaticPaths() {
  const result = await axios.get(ENDPOINT).then(res => res.data);
  if(!result) return;
  const paths = result.map((article) => ({
    params: { detail: `${article.id}` },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const url = `${ENDPOINT}/${params.detail}`;
  const result = await axios.get(url).then((res) => res.data);
  return { props: { article: result } };
}