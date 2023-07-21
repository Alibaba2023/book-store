import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const bookId = 'NkUDTFR7LcOSPaNZ6FZL';
const completeURl = `${url}${bookId}/books`;

const getAllBooks = createAsyncThunk('books/getAllBooks', async () => {
  try {
    const request = await axios(completeURl);
    const data = await request.data;
    return data;
  } catch (error) {
    return error;
  }
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const request = await axios.post(completeURl, book);
    const data = await request.data;
    return data;
  } catch (error) {
    return error;
  }
});

const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    const request = await axios.delete(`${completeURl}/${bookId}`);
    return request.data;
  } catch (error) {
    return error;
  }
});

export { getAllBooks, addBook, removeBook };
