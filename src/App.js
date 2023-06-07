import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JournalEntryList from './components/JournalEntryList';
import JournalEntryForm from './components/JournalEntryForm';
import CommentList from './components/CommentList';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entries" element={<JournalEntryList />} />
        <Route path="/add-entry" element={<JournalEntryForm />} />
        <Route path="/entries/:id/comments" element={<CommentList />} />
      </Routes>
    </Router>
  );
}

export default App;
