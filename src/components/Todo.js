import { useState } from "react";

const Todo = ({ todo, completeTodo, editTodoText, deleteTodo }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      <div>
        <h2 onClick={(e) => setShowInput(!showInput)}>{todo.text}</h2>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editTodoText(todo.id, e);
              setShowInput(false);
            }
          }}
          placeholder="Update todo"
          type="text"
          style={{ display: showInput ? "block" : "none" }}
        />
      </div>

      <label htmlFor="">
        Completed{" "}
        <input
          onChange={(e) => completeTodo(todo.id)}
          type="checkbox"
          checked={todo.completed}
        />
      </label>
      <button onClick={(e) => deleteTodo(todo.id)}>DELETE</button>
    </>
  );
};

export default Todo;
