import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { createTodo } from '../store/todos-slice';


function Form() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) dispatch(createTodo(title));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-items-center mb-5">
      <input
        type="title"
        value={title}
        className="form-control flex-grow-1 me-2"
        placeholder="Enter something..."
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary flex-shrink-0">
        Add Todo
      </button>
    </form>
  );
}

export default Form;
