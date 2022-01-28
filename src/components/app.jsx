import React, { useState } from 'react';
import Todo from './todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const todo = {
        id: Date.now().toString(),
        text,
        completed: false,
      };
      setTodos([todo, ...todos]);
    }

    setText('');
  };

  const removeTodo = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    );
  };

  return (
    <div className="container pt-5">
      <h1 className="text-center mb-3">Todo List</h1>
      <form onSubmit={handleSubmit} className="d-flex align-items-center mb-5">
        <input
          type="text"
          value={text}
          className="form-control flex-grow-1 me-2"
          placeholder="Enter text..."
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary flex-shrink-0">
          Add Todo
        </button>
      </form>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            removeTodo={removeTodo}
            toggleTodoComplete={toggleTodoComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
