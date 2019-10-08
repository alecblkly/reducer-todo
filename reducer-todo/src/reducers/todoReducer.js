export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 1
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO_ITEM":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};
