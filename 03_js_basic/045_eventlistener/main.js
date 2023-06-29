const h1Element = document.querySelector('h1');
console.dir(h1Element); // h1Elementのプロパティを確認できる

console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

const btnEl = document.querySelector('button');
// btnEl.addEventListener('click', (e) => {
//   console.dir(e.target.textContent);
//   console.log('hello');
// });

const helloFn = (e) => {
  console.dir(e.target.textContent);
  console.log('hello');
};

btnEl.addEventListener('click', helloFn);