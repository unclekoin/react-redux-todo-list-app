import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../store/todo-slice';
import Form from './form';
import TodoList from './todo-list';

function App() {
  // const dispatch = useDispatch();
  // const [text, setText] = useState('');

  // const addTodo = () => dispatch(addTask);

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };


  const removeTodo = (todoId) => {
    // const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    // setTodos(filteredTodos);
  };

  const toggleTodoComplete = (todoId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   })
    // );
  };

  return (
    <div className="container pt-5">
      <h1 className="text-center mb-3">Todo List</h1>
      <Form
        // text={text}
        // handleChange={handleChange}
        // handleSubmit={addTodo}
      />
      <TodoList
        removeTodo={removeTodo}
        toggleTodoComplete={toggleTodoComplete}
      />
    </div>
  );
}

export default App;
