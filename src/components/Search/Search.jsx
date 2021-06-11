import React, { useState } from 'react';
import './search.css';

export const Search = ({ performSearch }) => {
  const [text, setText] = useState('');

  return (
    <div className="search">
      <input
        onChange={(event) => setText(event.target.value)}
        value={text}
        type="text"
        placeholder="hledej"
      />
      <button onClick={() => performSearch(text)}>Hledat</button>
    </div>
  );
};
