import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JournalEntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/entries');
        setEntries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div>
      <h2>Journal Entries</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalEntryList;

