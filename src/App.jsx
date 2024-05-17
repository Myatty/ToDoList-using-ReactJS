// App.jsx
import { useEffect, useState } from "react";
import "./style.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("Items")
    if(localValue == null) return []

    return JSON.parse(localValue)
  });

  // Cant use Hooks inside conditions , they have to be on the top 
  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(toDos))
  }, [toDos])

  function addTodo(title) {
    setToDos((currentToDos) => [
      ...currentToDos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleToDo(id, completed) {
    setToDos((currentToDos) =>
      currentToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed } : toDo
      )
    );
  }

  function deleteTodo(id) {
    setToDos((currentToDos) => currentToDos.filter((toDo) => toDo.id !== id));
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To Do List</h1>
      <TodoList
        toDos={toDos}
        toggleToDo={toggleToDo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
