import PropTypes from 'prop-types';

function Book({ catagories, title, author }) {
  return (
    <div className="book-item-container">
      <div>
        <h4>{catagories}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="container-buttons">
          <button type="button" className="a-book-buttons">Comments</button>
          <button type="button" className="a-book-buttons">Remove</button>
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
        <button type="button" className="book-buttons">Update prograss</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  catagories: PropTypes.string.isRequired,
};

export default Book;
