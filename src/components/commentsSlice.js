import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const response = await fetch('comments');
    if(!response.ok) {
      return Promise.reject('Unable to fetch, status: ' + response.status);
    } else {
      const data = await response.json();
      return data;
    }
  }
)

export const postComment = createAsyncThunk(
  'comments/postComment',
  async (comments, {dispatch}) => {
    const response = await fetch('comments', { method: 'POST', body: JSON.stringify(comments), headers: {'Content-Type': 'application/json'}});
    if(!response.ok) {
      return Promise.reject(response.status)
    }
      const data = await response.json();
      dispatch(addComment(data))
  }
)

const initialState = {
  commentsArray: [],
  isLoading: true,
  errMsg: ''
};

const commentsSlice = createSlice ({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log('addComment action.payload:', action.payload);
      console.log('addComment state.commentsArray:', state.commentsArray);
      const newComment = {
        id: state.commentsArray.length + 1,
        ...action.payload
      };
      state.commentsArray.push(newComment);
    }
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.commentsArray = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message: 'Fetch failed';
    },
    [postComment.rejected]: (state, action) => {
      alert('Your comment could not be posted\nError: ' + action.error ? action.error.message : 'Fetch Failed')
    }
  }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectComments = (id) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.id === parseInt(id)
  );
};
