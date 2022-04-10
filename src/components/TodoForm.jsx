import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo-slice";

export default function TodoForm(props) {
  const { input, setInput } = props;
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addTodo({ id: Date.now(), title: input, completed: false }));
    setInput("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="todo-input"
        placeholder="Add a todo"
        autoComplete="off"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" disabled={input.trim().length === 0}>
        +
      </button>
    </form>
  );
}
