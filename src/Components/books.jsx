function Book({ title, author }) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>Comments</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>

      <div>
        <span>Current Chapter</span>
        <span>Chapter 17</span>
        <button type="button">CHECK STATUS</button>
      </div>
    </div>
  );
}

export default Book;