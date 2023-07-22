// 関数型(純粋関数)
// fn(決まった引数) -> 決まった戻り値
// 関数外の状態は参照・変更しない
// 関数外に影響を及ぼさない
// 引数で渡された値を変更しない
// これらの要件を満たさない操作は「副作用」と呼ばれる

const Example = () => {
  const val1 = 2, val2 = 3;
  const add = (val1, val2) => {
    return val1 + val2;
  }

  return (
    <>
      <div>純粋関数：{add(val1, val2)}</div>
    </>
  );
};

export default Example;
