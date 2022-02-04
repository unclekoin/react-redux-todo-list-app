import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      );
      if (!response.ok) throw new Error('Server Error!');
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) throw new Error("Can't delete task. Server error.");

      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleStatusTodo = createAsyncThunk(
  'todos/toggleStatusTodo',
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.data.find((item) => item.id === id);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        }
      );

      if (!response.ok) throw new Error("Can't toggle status. Server error.");

      dispatch(toggleTodoStatus({ id }));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async function (title, { rejectWithValue, dispatch }) {
    try {
      const todo = {
        userId: 1,
        title,
        completed: false,
      };
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(todo),
        }
      );

      if (!response.ok) throw new Error("Can't add task. Server error.");

      const data = await response.json();
      dispatch(addTodo(data));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.data.push(action.payload);
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
  extraReducers: {
    [fetchTodos.pending](state) {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodos.fulfilled](state, action) {
      state.status = 'resolved';
      state.data = action.payload;
    },
    [fetchTodos.rejected]: setError,
    [deleteTodo.rejected]: setError,
    [toggleStatusTodo.rejected]: setError,
  },
});

const { reducer: todosReducer, actions } = todosSlice;

const { addTodo, removeTodo, toggleTodoStatus } = actions;

export const getTodosState = () => (state) => state.todos;
export const getTodos = () => (state) => state.todos.data;

// export const addTask = (payload) => (dispatch) => {
//   dispatch(addTodo(payload));
// };

// export const removeTask = (payload) => (dispatch) => {
//   dispatch(removeTodo(payload));
// };

// export const toggleTaskStatus = (payload) => (dispatch) =>
//   dispatch(toggleTodoStatus(payload));

export default todosReducer;
