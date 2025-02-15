"use client";
import { useState } from "react";

export function TodoApp() {
  const [input, setInput] = useState("");
  const [TodoList , setTodoList] = useState([]);
  const addTodo = () => {
    console.log("addtodo", input);
    setTodoList([...TodoList , input]);
    setInput("");

  };

  return (
    <div className="p-6">
      <form>
        <input
          type="text"
          class="px-4 py-2 border border-red-500 mt-8"
          placeholder="Enter any thing"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="button" class="bg-blue-600 text-white px-8 py-2 " onClick={addTodo}>Add</button>
      </form>
      <ol>
       {TodoList.map((todo, index)=>{
        return <li key={index}>{todo}</li>
       })}
      </ol>
    </div>
  );
}
