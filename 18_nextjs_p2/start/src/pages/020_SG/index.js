// Static Site Generation
export default function IndexPage({ message }) {
  return <h3>SG: {message}</h3>
}

// SGしたいページにpropsを渡す関数
// getServerSidePropsはnode.js上で実行されるが、
// getStaticPropsはビルドされる時に実行される
export async function getStaticProps() {
  return {
    props: { message: 'From Static Props' }
  }
}