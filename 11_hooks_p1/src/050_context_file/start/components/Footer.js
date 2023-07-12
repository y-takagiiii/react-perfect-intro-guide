import { useUpdateTheme } from '../context/ThemeContext'

const Footer = () => {
  // 更新用関数だけを読み込んでいるコンポーネントは再レンダリングの必要がない
  // useThemeでは読み込んでいるものが更新用関数なのか判断できないのでレンダリングされてしまう
  // 不要なレンダリングを避けるためにProviderで渡しているstateを分割する
  const setTheme = useUpdateTheme();
  console.log('footer');

  return (
    <footer>
      <div>フッター</div>
    </footer>
  )
};

export default Footer;
