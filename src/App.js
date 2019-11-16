import React, { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  if (action === "add") {
    return state + 1;
  }
  return state - 1;
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <header className="App-header">
        <p>{state}</p>
        <p>
          <button
            type="button"
            onClick={() => {
              dispatch("add");
            }}
          >
            Add Reducer Count
          </button>
        </p>
        <p>
          <button
            type="button"
            onClick={() => {
              dispatch("subtract");
            }}
          >
            Subtract Reducer Count
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
