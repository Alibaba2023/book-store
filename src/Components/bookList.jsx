import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './books';
import Form from './form';
import { getAllBooks } from '../redux/books/booksSlice';

function BookList() {
  const { books, isLoading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  if (isLoading) {
    return <div className="alert-div">Loading</div>;
  }

  if (error) {
    return (
      <div className="alert-div">
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      {books.length !== 0 ? (
        <div className="book-container">
          {books.map((book) => (
            <Book
              key={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              itemId={book.item_id}
            />
          ))}
        </div>
      ) : (
        <div className="alert-div">NO Book</div>
      )}
      <Form />
    </>
  );
}

export default BookList;
