import React, { useReducer } from "react";
import "./App.css";

const initialState = {
  title: "Hello World",
  count: 0
};

function reducer(state, action) {
  console.log(action);
  if (action.type === "add") {
    return {
      ...state,
      count: state.count + 1
    };
  }
  if (action.type === "edit-title") {
    return {
      ...state,
      title: action.title
    };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{state.title}</h1>
        <div>
          <input
            type="text"
            value={state.title}
            onChange={e => {
              dispatch({
                type: "edit-title",
                title: e.target.value
              });
            }}
          />
        </div>
        <p>{state.count}</p>
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: "add"
            });
          }}
        >
          Add Reducer Count
        </button>
      </header>
    </div>
  );
}

export default App;
