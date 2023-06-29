// const arry = ["配列1", "配列2", "配列3"];
// console.log(arry[2]);

// 分割代入 配列やオブジェクトから特定の要素を変数として取り出す
// const [a, b, c] = ["配列1", "配列2", "配列3"];
// console.log(a);
// console.log(c);


// const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(obj.x);
// console.log(obj.y);

// const { z, x } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(x);
// console.log(z);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

// const fnArr = (arry) => {
//   console.log("---配列---");
//   console.log(`country: ${arry[0]}`);
//   console.log(`state: ${arry[1]}`);
//   console.log(`city: ${arry[2]}`);
// };

const fnArr = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

// const fnObj = (objAddr) => {
//   console.log("---オブジェクト---");
//   console.log(`country: ${objAddr.country}`);
//   console.log(`state: ${objAddr.state}`);
//   console.log(`city: ${objAddr.city}`);
// };

const fnObj = ({country, state, city}) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);
