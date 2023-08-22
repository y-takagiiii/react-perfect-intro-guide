const Example = () => {
  // TypeScriptでは、type文を用いて型に別名をつけることができる。
  // これを型エイリアス(type alias)と呼ぶ
  // 型エイリアスはパスカルケースで定義する
  type User = {
    name: string,
    age: number
  }
  const user: User = { name: 'Taro', age: 10 }

  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "woman" | "other";
  type UserProfile = {
    name: UserName,
    age: UserAge,
    gender: UserGender,
  };

  const userProfile: UserProfile = {
    name: 'Hanako',
    age: 21,
    gender: 'woman'
  }
};

export default Example;
