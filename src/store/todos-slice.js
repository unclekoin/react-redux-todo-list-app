import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
  },
  reducers: {
    addTodo(state, action) {
      state.data.push({
        id: Date.now().toString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoStatus(state, action) {
      const foundTodo = state.data.find(
        (todo) => todo.id === action.payload.id
      );
      foundTodo.completed = !foundTodo.completed;
    },
  },
});

const { reducer: todosReducer, actions } = todosSlice;

const { addTodo, removeTodo, toggleTodoStatus } = actions;

export const getTodos = () => (state) => state.todos.data;

export const addTask = (payload) => (dispatch) => {
  dispatch(addTodo(payload));
};

export const removeTask = (payload) => (dispatch) => {
  dispatch(removeTodo(payload));
};

export const toggleTaskStatus = (payload) => (dispatch) =>
  dispatch(toggleTodoStatus(payload));

export default todosReducer;
