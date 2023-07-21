import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [category, setCategory] = useState('category');
  const [booknName, setBookName] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category === 'category' || !booknName) return;
    const newBook = {
      item_id: new Date().getTime(),
      title: booknName,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setCategory('');
    setBookName('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={booknName}
        onChange={(e) => setBookName(e.target.value)}
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
        name="category"
        id="form-category"
        required
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Category">Category</option>
        <option value="Book">Book</option>
      </select>
      <button type="submit" className="book-buttons">
        ADD BOOK
      </button>
    </form>
  );
}

export default Form;
