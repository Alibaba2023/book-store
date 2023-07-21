import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const formattedBooks = ([bookItem], id) => (
  {
    item_id: id,
    title: bookItem.title,
    author: bookItem.author,
    category: bookItem.category,
  }
);

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NkUDTFR7LcOSPaNZ6FZL/books';

export const getAllBooks = createAsyncThunk('books/getAllBooks', async () => {
  try {
    const response = await axios(`${baseURL}`);
    return response.data || [];
  } catch (error) {
    return 'Something went wrong. Try again refreshing the page.';
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(`${baseURL}`, book);
    return response.data === 'Created' ? book : null;
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    const response = await axios.delete(`${baseURL}/${bookId}`);
    return response.data === 'The book was deleted successfully!' ? bookId : null;
  } catch (error) {
    return 'Request failed!. The book was not removed. Try Again.';
  }
});

const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const formattedDataBooks = Object.keys(action.payload)
          .map((key) => formattedBooks(action.payload[key], key));
        state.books = [...formattedDataBooks];
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.books = state.books.filter((book) => book.item_id !== action.payload);
        }
      });
  },
});

export default booksSlice.reducer;
