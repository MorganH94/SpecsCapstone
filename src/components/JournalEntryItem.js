import React from 'react';

const JournalEntryItem = ({ entry }) => {
  return (
    <div>
      <h3>{entry.title}</h3>
      <p>{entry.content}</p>
      <p>Mood: {entry.mood}</p>
    </div>
  );
};

export default JournalEntryItem;