import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('Book');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the addBook action with the input values as payload
    dispatch(addBook({ title, author, categories }));

    // Reset the input fields
    setTitle('');
    setAuthor('');
    setCategories('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <select
        name="categories"
        id="form-category"
        required
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
      >
        <option value="book">Book</option>
        <option value="News">News</option>
        <option value="History">History</option>
      </select>
      <button type="submit" className="book-buttons">
        ADD BOOK
      </button>
    </form>
  );
}

export default Form;
