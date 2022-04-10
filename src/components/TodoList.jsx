import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearTodo,
  completedTodo,
  deleteTodo,
  editTodo,
} from "../redux/todo-slice";
import TodoItem from "./TodoItem";

export default function TodoList({ setInput }) {
  const data = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();

  function editTodoHandler(id, title) {
    dispatch(editTodo({ id, title: setInput(title) }));
    document.getElementById("todo-input").focus();
  }

  function deleteTodoHandler(id) {
    dispatch(deleteTodo({ id }));
  }

  return (
    <div>
      {data.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onEditTodo={editTodoHandler}
          onDeleteTodo={deleteTodoHandler}
        />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <button onClick={() => dispatch(completedTodo())}>
          clear completed
        </button>
        <button onClick={() => dispatch(clearTodo())}>clear All</button>
      </div>
    </div>
  );
}
