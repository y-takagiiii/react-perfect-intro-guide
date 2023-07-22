// 関数型プログラミング
// (値の)状態と処理を分離して管理
// A(data) -> B(data) -> C(data) -> 結果

// オブジェクト指向型プログラミング
// 状態と処理を対で管理
// object.method(); -> 結果

const Example = () => {
  // オブジェクト指向型 データ(nums)と処理(sum())を対で管理しておく
  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for(let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    }
  };

  // 関数型
  const nums = [1, 2, 3];
  const sum = (array) => {
    const nums = array;
    let sumValue = 0;
    for(let i = 0; i < nums.length; i++) {
      sumValue += nums[i];
    }
    return sumValue;
  }
  return (
    <>
      <div>オブジェクト指向型：{numObj.sum()}</div>
      <div>関数型：{sum(nums)}</div>
    </>
  );
};

export default Example;
