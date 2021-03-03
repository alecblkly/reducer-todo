import React from "react";

// importing todo list
import TodoList from "./components/TodoList";

// importing css
import "./index.css";

function App() {
  return (
    <div className="App">
      <h2>Reducer Todo</h2>
      <TodoList />
    </div>
  );
}

export default App;
