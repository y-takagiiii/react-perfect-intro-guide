let a = 0;
console.log(a);


// 2000ms後にaの値を更新してresolve関数を実行→thenの中の処理が実行
// reject関数を実行→catchの中の処理が実行
new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a)
    // reject(a)
  }, 2000);
}).then((b) => {
  console.log(b);
  return b;
}).then((b) => {
  console.log(b);
}).catch((c) => {
  console.log('catchが実行', c)
})
