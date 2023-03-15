import Todo from './Todo';

const TodoList = ({
  todos,
  addTodo,
  completeTodo,
  editTodoText,
  deleteTodo,
}) => {
  return (
    <>
      <h1>Create Todo</h1>
      <input
        placeholder="Create a todo"
        type="text"
        onKeyDown={(e) => e.key === "Enter" && addTodo(e)}
      />

      {todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul>
            {todos
              .filter((i) => !i.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  editTodoText={editTodoText}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
          <h1>Completed Items</h1>
          <ul>
            {todos
              .filter((i) => i.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  editTodoText={editTodoText}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
        </>
      ) : (
        <h1>No todos Added yet</h1>
      )}
    </>
  );
};

export default TodoList