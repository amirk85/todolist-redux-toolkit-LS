import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todos() {
  const [input, setInput] = useState("");

  return (
    <main>
      <TodoForm input={input} setInput={setInput} />
      <TodoList setInput={setInput} />
    </main>
  );
}
