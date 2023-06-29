function print(callback) {
  // 2 * 2
  const result = callback(2);
  console.log(result);
}

// 引数に初期値を設定すると関数を実行時に引数がない場合に初期値が渡される 3 * 2
function fn(number = 3) {
  return number * 2;
}
// debugger;
print(fn);