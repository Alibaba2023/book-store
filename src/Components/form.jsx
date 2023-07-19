function Form() {
  return (
    <form>
      <input type="text" placeholder="Book Title" required />
      <input type="text" placeholder="Book Author" required />
      <select name="catagories" id="form-catagory">
        <option value="catagory">Catagory</option>
      </select>
      <button type="submit" className="book-buttons">ADD BOOK</button>
    </form>
  );
}

export default Form;
