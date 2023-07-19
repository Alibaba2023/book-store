import { useDispatch, useSelector } from 'react-redux';
import Book from './books';
import Form from './form';
import { removeBook } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (title) => {
    dispatch(removeBook(title));
  };

  return (
    <div className="book-container">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          categories={book.categories}
          removeBook={() => handleRemoveBook(book.title)}
        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
