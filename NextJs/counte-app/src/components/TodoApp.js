"use client";
import { useState } from "react";
import Button from "./Button";

export function TodoApp() {
  const [input, setInput] = useState("");
  const [TodoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [singleTodo, setSingleTodo] = useState({ text: "", index: "" });

  // Add TodoList

  const addTodo = () => {
    console.log("addtodo", input);
    setTodoList([...TodoList, input]);
    setInput("");
  };

  // Delete TodoList

  const deleteTodo = (index) => {
    console.log("deleteTodo", index);
    console.log("todolist", TodoList);

    const newTodoList = TodoList.filter(
      (todo, TodoIndex) => TodoIndex != index
    );
    setTodoList(newTodoList);
  };

  // Edit TodoList

  const editTodo = (item, index) => {
    setSingleTodo({
      text: item,
      index: index,
    });
    setInput(item);
    setIsEdit(true);
  };

  // Update TodoList

  const updateTodo = () => {
    console.log("Update Todo");

    const newTodoList = TodoList.map((item , index) =>{
      console.log("index", index);
      if (index === singleTodo.index) {
        return input;
    }
    return item;
  });
  setTodoList(newTodoList);
    setInput("");
    setIsEdit(false);
    setSingleTodo({ text: "", index: "" });
};
  return (
    <div className="p-6">
      <form>
        <input
          type="text"
          className="px-4 py-2 border border-red-500 mt-8"
          placeholder="Enter any thing"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <Button
          type="button"
          onClick={() => {
            if (!isEdit) {
              addTodo();
            } else {
              updateTodo();
            }
          }}
          bgColor={isEdit ? "orange" : "blue"}
          title={isEdit ? "Update" : "Add"}
        />
      </form>
      <ol>
        {TodoList.map((todo, index) => {
          return (
            <li key={index}>
              <div className="flex gap-4 ms-4">
                <p className="my-auto">{todo}</p>
                <div className="flex gap-4"></div>
                <Button
                  title="Delete"
                  onClick={() => deleteTodo(index)}
                  bgColor="red"
                />
                <Button
                  title="Edit"
                  onClick={() => editTodo(todo, index)}
                  bgColor="orange"
                />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
