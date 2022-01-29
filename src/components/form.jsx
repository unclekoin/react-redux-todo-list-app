import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/todos-slice';

function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
    setText('');
  };

  return (
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
  );
}

export default Form;
