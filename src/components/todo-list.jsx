import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../store/todos-slice';
import Todo from './todo';

function TodoList() {
  const todos = useSelector(getTodos());
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
