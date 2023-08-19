const Example = () => {
  // 配列の型定義
  const array1: number[] = [1, 2, 3]
  const array2: string[] = ['hello', 'bye']
  // Arrayのコンストラクタを使った型定義(ジェネリック型)
  const array3: Array<number> = [4, 5, 6]
  // ユニオン型で型定義
  const array4: (string | number)[] = [7, 'good']
  const array5: Array<string | number> = [8, 'bad']

  // オブジェクトの型定義
  const obj1: { name: string, age: number } = { name: 'Taro', age: 18 }
  // 型を先に定義しておく
  type Person = { name: string, age: number, gender: string }
  const obj2: Person = { name: 'Jiro', age: 15, gender: 'man'}

  // オブジェクトを含む配列の型定義
  const users: Person[] = [
    { name: 'Tom', age: 15, gender: 'man'},
    { name: 'Bob', age: 15, gender: 'man'},
    { name: 'Emma', age: 15, gender: 'woman'},
  ]

  const prefectures: { name: string, region: string }[] = [
    { name: '東京都', region: '関東' },
    { name: '宮城県', region: '東北' },
    { name: '熊本', region: '九州' },
  ]
};

export default Example;
