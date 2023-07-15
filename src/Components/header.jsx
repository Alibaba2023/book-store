function Header() {
  return (
    <div className="header">
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <a href="/" className='books'>Books</a>
          </li>
          <li>
            <a href="/categories" className='categories'>Categories</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;