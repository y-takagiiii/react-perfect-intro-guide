const arry = [10, 20, 30, 40];
const newArry = [];

// const newArry2 = arry.map(val => val * 2);
const newArry2 = arry.map((val, i, arry) => {
  console.log( `インデックス ${i}`, `値 ${val}`);
  console.log(`元の配列 ${arry}`);
  return val * 3;
});
console.log(newArry2);

// newArry2の値が50より大きいものを取り出して新しい配列を作成
const newArry3 = newArry2.filter(val => val > 50)
console.log(newArry3);