import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "multiply", "divide"];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'change':
      return { ...state, [payload.name]: payload.value };
    case 'add':
      return { ...state, result: state.a + state.b };
    case 'minus':
      return { ...state, result: state.a - state.b };
    case 'multiply':
      return { ...state, result: state.a * state.b };
    case 'divide':
      return { ...state, result: state.a / state.b };
    default:
      throw new Error("不明なタイプです");
  }
}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({ type: 'change', payload: { name: e.target.name, value: parseInt(e.target.value) } });
  }

  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        { CALC_OPTIONS.map(type => {
          return (
            <option key={type} value={type}>{type}</option>
          );
        }) }
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
