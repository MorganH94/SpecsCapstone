import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JournalEntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('/api/entries');
      setEntries(response.data.entries);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Journal Entries</h2>
      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>{entry.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JournalEntryList;
