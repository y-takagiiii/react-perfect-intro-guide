import { createContext, useReducer, useContext } from 'react';

// stateを管理するcontext
const CounterContext = createContext();
// dispatchを管理するcontext
const CounterDispatchContext = createContext();
// provider
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです。')
    }
  }, 0);
  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  )
}

const useCounter = () => {
  return useContext(CounterContext);
}

const useCounterDispatch = () => {
  return useContext(CounterDispatchContext);
}

export { CounterProvider, useCounter, useCounterDispatch }