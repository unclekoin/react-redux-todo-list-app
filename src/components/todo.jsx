import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  toggleStatusTodo,
} from '../store/todos-slice';

const Todo = ({ id, completed, title }) => {
  const dispatch = useDispatch();
  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const toggleTodoStatus = (id) => {
    dispatch(toggleStatusTodo(id));
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          className="form-check-input me-2"
          onChange={() => toggleTodoStatus(id)}
          type="checkbox"
          checked={completed}
          role="button"
          id={`cht${id}`}
        />
        <label
          className={`form-check-label${
            completed ? ' text-decoration-line-through' : ''
          }`}
          htmlFor={`cht${id}`}
          role="button"
        >
          {title}
        </label>
      </div>
      <i
        onClick={() => removeTodo(id)}
        className="bi bi-x fs-5 lh-1"
        role="button"
      />
    </li>
  );
};

export default Todo;
