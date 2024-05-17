// TodoList.jsx
import { TodoItem } from "./TodoItem";

export function TodoList({ toDos, toggleToDo, deleteTodo }) {
  return (
    <ul className="list">
      {toDos.length === 0 && "Empty List"}
      {toDos.map((toDo) => (
        <TodoItem
          key={toDo.id}
          {...toDo}
          toggleToDo={toggleToDo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
