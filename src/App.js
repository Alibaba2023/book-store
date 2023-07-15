import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import BookList from './Components/bookList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
