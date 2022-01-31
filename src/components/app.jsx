import React from 'react';
import Form from './form';
import TodoList from './todo-list';

function App() {
  return (
    <div className="container pt-5">
      <h1 className="text-center mb-3">Todo List</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
