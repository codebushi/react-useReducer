import React, { useReducer, useEffect } from "react";
import "./App.css";

const initialState = {
  title: "Hello World",
  count: 0,
  loading: true,
  data: null
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_DATA": {
      return {
        ...state,
        data: action.data,
        loading: false
      };
    }
    case "ADD": {
      return {
        ...state,
        count: state.count + 1
      };
    }
    case "SUBTRACT": {
      return {
        ...state,
        count: state.count - 1
      };
    }
    case "EDIT_TITLE": {
      return {
        ...state,
        title: action.title
      };
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SET_DATA", data });
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {state.loading && <p>LOADING...</p>}
        {state.data &&
          state.data.map(todo => <p key={todo.id}>{todo.title}</p>)}
        <h1>{state.title}</h1>
        <div>
          <input
            type="text"
            value={state.title}
            onChange={e => {
              dispatch({
                type: "EDIT_TITLE",
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
              type: "ADD"
            });
          }}
        >
          Add Reducer Count
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: "SUBTRACT"
            });
          }}
        >
          Subtract Reducer Count
        </button>
      </header>
    </div>
  );
}

export default App;
