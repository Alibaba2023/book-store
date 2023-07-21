import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({
  title, author, category, itemId,
}) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    // Dispatch the removeBook action with the book's itemId as payload
    dispatch(removeBook(itemId));
  };

  return (
    <div className="book-item-container">
      <div>
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="container-buttons">
          <button type="button" className="a-book-buttons">
            Comments
          </button>
          <button type="button" className="a-book-buttons" onClick={handleRemoveBook}>
            Remove
          </button>
          <button type="button" className="a-book-buttons">
            Edit
          </button>
        </div>
      </div>
      <div>
        <h3>65%</h3>
        <p>Completed</p>
      </div>
      <div className="current-chapter-container">
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="book-buttons">
          Update progress
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
