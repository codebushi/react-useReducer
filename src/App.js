import React, { useReducer, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function reducer(reducerCount) {
  return reducerCount + 1;
}

function App() {
  const [count, setCount] = useState(0);
  const [reducerCount, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>{state.title}</h1> */}
        <p>{count}</p>
        <p>
          <button
            type="button"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Add Count
          </button>
        </p>
        <p>{reducerCount}</p>
        <p>
          <button
            type="button"
            onClick={() => {
              dispatch();
            }}
          >
            Add Reducer Count
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
