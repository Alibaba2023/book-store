import PropTypes from 'prop-types';

function Book({
  title, author, categories, removeBook,
}) {
  const handleRemoveBook = () => {
    removeBook(title); // Pass the book title to the removeBook function
  };

  return (
    <div className="book-item-container">
      <div>
        <h4>{categories}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="container-buttons">
          <button type="button" className="a-book-buttons">Comments</button>
          <button type="button" className="a-book-buttons" onClick={handleRemoveBook}>Remove</button>
          <button type="button" className="a-book-buttons">Edit</button>
        </div>
      </div>
      <div>
        <h3>65%</h3>
        <p>Completed</p>
      </div>
      <div className="current-chapter-container">
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="book-buttons">Update progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
