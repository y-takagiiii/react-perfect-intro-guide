class User {
  public name: string;
  private age: number;

  constructor(name: string, age: number  ) {
    this.name = name;
    this.age = age;
  }
}

const Example = () => {
  const user = { name: "Hanako", age: 21 };
  const user1 = new User("Taro", 22)
  console.log(user1)
  // privateメソッドにしたプロパティはクラス外からアクセス不可
  // console.log(user1.age)
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  )
};

export default Example;
