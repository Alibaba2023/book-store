function Form() {
  return (
    <form>
      <input type="text" placeholder="Book Title" required />
      <input type="text" placeholder="Book Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default Form;
