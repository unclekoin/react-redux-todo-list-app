import React from 'react';

const Todo = ({ id, text, completed, removeTodo, toggleTodoComplete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          className="form-check-input me-2"
          onChange={() => toggleTodoComplete(id)}
          type="checkbox"
          checked={completed}
          id={`cht${id}`}
        />
        <label
          className={`form-check-label${
            completed ? ' text-decoration-line-through' : ''
          }`}
          htmlFor={`cht${id}`}
        >
          {text}
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
