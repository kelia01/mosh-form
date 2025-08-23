// Create a simple counter app with the following requirements:
// Use useReducer for state management.
// Actions: increment, decrement, reset

import { useReducer } from "react";

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="flex justify-center items-center">
      <div className="">
      <h1>Counter</h1>
      <h2>{state.count}</h2>
      <div className="flex gap-4 p-3">
        <button
          className="bg-amber-400 p-1 px-3 py-1 rounded-lg"
          onClick={() => dispatch({ type: "Increment" })}
          >
          Increment
        </button>
        <button
          className="bg-amber-400 p-1 px-3 py-1 rounded-lg"
          onClick={() => dispatch({ type: "Decrement" })}
          >
          Decrement
        </button>
      </div>
      <button
        className="bg-amber-400 p-1 px-3 py-1 rounded-lg"
        onClick={() => dispatch({ type: "Reset" })}
        >
        Reset
      </button>
        </div>
    </div>
  );
};

export default Counter;
