// モジュールをまとめて読み込む事もできる
import functionB, { hello, User } from "./module.js";
// default exportされたモジュールの読み込み
// default exportされたモジュールのみ名前が変更できる
// import functionB from "./module.js";

hello();

const user = new User('Tom');
user.hello();

functionB();