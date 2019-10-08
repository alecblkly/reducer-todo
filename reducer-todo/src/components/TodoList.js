import React, { useState, useReducer } from "react";

// importing initialState and reducer
import { initialState, reducer } from "../reducers/todoReducer";

const TodoList = () => {
    const [{ item }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <p>{item}</p>
      <input
        type="text"
        name="todo"
        placeholder="Clean out bunny cage"
        className="input"
      />
      <button>Add new item</button>
    </div>
  );
};

export default TodoList;
