import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.text = text;
      }
    },
  },
});
export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
export const selectTodos = (state) => state.todos.todos;