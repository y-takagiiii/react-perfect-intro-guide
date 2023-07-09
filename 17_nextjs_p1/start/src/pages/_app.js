import '../styles/globals.css'
import { AppProvider } from "../context/AppContext";
import Layout1 from '../components/layout/layout1'

// ページ初期化時に必ず実行されるコンポーネント
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout1>{page}</Layout1>)
  return (
    <AppProvider>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
}

export default MyApp;
