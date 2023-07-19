function Form() {
  return (
    <form>
      <input type="text" placeholder="Book Title" required />
      <input type="text" placeholder="Book Author" required />
      <select name="categories" id="form-category">
        <option value="category">Category</option>
      </select>
      <button type="submit" className="book-buttons">ADD BOOK</button>
    </form>
  );
}

export default Form;
