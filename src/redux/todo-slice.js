import { createSlice } from "@reduxjs/toolkit";

const storedData = JSON.parse(localStorage.getItem("todos"));

const initialState = {
  data: storedData || [],
  editId: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      if (!state.editId) {
        state.data.push(action.payload);
      } else {
        const updatedTodo = state.data.map((todo) => {
          if (todo.id === state.editId) {
            return { ...todo, title: action.payload.title };
          }
          return todo;
        });
        state.data = updatedTodo;
        state.editId = null;
      }
      localStorage.setItem("todos", JSON.stringify(state.data));
    },

    deleteTodo(state, action) {
      const filteredTodo = state.data.filter((t) => t.id !== action.payload.id);
      state.data = filteredTodo;
      localStorage.setItem("todos", JSON.stringify(state.data));
    },

    editTodo(state, action) {
      const foundTodo = state.data.find((t) => t.id === action.payload.id);
      action.payload.title = foundTodo.title;
      state.editId = foundTodo.id;
    },

    toggleTodo(state, action) {
      const toggle = state.data.find((t) => t.id === action.payload.id);
      toggle.completed = !toggle.completed;
    },

    completedTodo(state) {
      const incompletedTodo = state.data.filter((t) => !t.completed);
      state.data = incompletedTodo;
    },

    clearTodo(state) {
      state.data = [];
      localStorage.removeItem("todos");
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  completedTodo,
  clearTodo,
  editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
