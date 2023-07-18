import Book from './books';
import Form from './form';

const data = [
  {
    id: 1,
    title: 'Book title',
    author: 'Author',
    catagories: 'History',
  },
  {
    id: 2,
    title: 'Book title',
    author: 'Author',
    catagories: 'History',
  },
  {
    id: 3,
    title: 'Book title',
    author: 'Author',
    catagories: 'History',
  },
  {
    id: 4,
    title: 'Book title',
    author: 'Author',
    catagories: 'History',
  },
];

function BookList() {
  return (
    <div className="book-container">
      {data.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} catagories={book.catagories} />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
