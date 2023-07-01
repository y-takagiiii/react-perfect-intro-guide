import React from "react";

const Bye = () => {
      return <h2>GoodBye!</h2>;
}

// Babelで変換
// const Bye = () => {
//   return /*#__PURE__*/React.createElement("h2", null, "GoodBye!");
// };

const Example = () => {
  return (
    <div>
      <Bye/>
    </div>
  );
};

// Babelで変換
// const Example = () => {
//   return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Bye, null));
// };

console.log(Example());

export default Example;

