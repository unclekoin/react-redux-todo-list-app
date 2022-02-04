import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './form';
import TodoList from './todo-list';
import { fetchTodos } from '../store/todos-slice';
import { getTodosState } from '../store/todos-slice';

function App() {
  const { status, error } = useSelector(getTodosState());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="container pt-5">
      <h1 className="text-center mb-3">Todo List</h1>
      <Form />
      {status === 'loading' && (
        <div className='d-flex justify-content-center'>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      )}
      <TodoList />
    </div>
  );
}

export default App;
