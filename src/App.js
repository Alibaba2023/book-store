import React from 'react';
import { Router, Route } from 'react-router-dom';
import './index.css';
import Header from './Components/header';
import BookList from './Components/bookList';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/books" component={BookList} />
      <Route path="/books" component={BookList} />
    </Router>
  );
}

export default App;
