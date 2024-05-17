export function TodoItem({ id, completed, title, toggleToDo, deleteTodo }) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleToDo(id, e.target.checked)}
          />
          {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </li>
    );
  }
  