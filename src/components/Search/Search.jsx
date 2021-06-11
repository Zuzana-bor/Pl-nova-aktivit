import React, { useState } from 'react';
import './search.css';
import { posts } from '../../data';

export const Search = ({ searching }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    searching(text);
  };

  return (
    <>
      <div className="search">
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          id="query"
          type="text"
          placeholder="hledej"
        />
        <button onClick={handleSubmit}>Hledat</button>
      </div>
    </>
  );
};
