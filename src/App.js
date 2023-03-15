import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([
    { text: "test", id: 1, completed: true },
  ]);

  const addTodo = (e) => {
    if(e.target.value === "") return;
    //create a todo object
    const newTodo = {
    text: e.target.value,
    id: Date.now(),
    completed: false
    }
    setTodos([...todos, newTodo]);
    //reset the input
    e.target.value= ""
  }
  const completeTodo = (id, e) => {
    //create new copy of the todos to update the one was clicked
    const todosCopy = [...todos];
    //find the todo that match the id;
    const indexOfTodo = todosCopy.findIndex(el => el.id === id);
    //update the completed value
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    //save to state
    setTodos([...todosCopy])
  }
  const editTodoText = (id, e) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy[indexOfTodo].text = e.target.value;
    setTodos([...todosCopy]);
    e.target.value = "";
  };

  const deleteTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy.splice(indexOfTodo, 1);
    setTodos([...todosCopy]);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
