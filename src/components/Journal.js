import React from 'react';
import JournalEntryForm from './JournalEntryForm';
import JournalEntryList from './JournalEntryList';

const Journal = () => {
  return (
    <div>
      <h1>Journal</h1>
      <JournalEntryForm />
      <JournalEntryList />
    </div>
  );
};

export default Journal;