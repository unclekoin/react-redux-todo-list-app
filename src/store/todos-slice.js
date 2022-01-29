import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: []
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.data.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {},
    toggleTodoStatus(state, action) { },
  },
});

const { reducer: todosReducer, actions } = todosSlice;

export const { addTodo, removeTodo, toggleTodoStatus } = actions;

export const getTodos = () => (state) => state.todos.data;

export const addTask = (payload) => (dispatch) => {
  dispatch(addTodo(payload))
}

export default todosReducer;
