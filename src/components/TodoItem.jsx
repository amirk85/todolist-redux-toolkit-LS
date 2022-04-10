import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/todo-slice";

export default function TodoItem(props) {
  const { title, completed, id, onEditTodo, onDeleteTodo } = props;

  const dispatch = useDispatch();

  function toggleTodoHandler(id) {
    dispatch(toggleTodo({ id }));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodoHandler(id)}
        />
        <p style={{ cursor: "default" }} onClick={() => toggleTodoHandler(id)}>
          {title}
        </p>
      </div>
      <div>
        <button onClick={() => onEditTodo(id, title)}>edit</button>
        <button onClick={() => onDeleteTodo(id)}>del</button>
      </div>
    </div>
  );
}
