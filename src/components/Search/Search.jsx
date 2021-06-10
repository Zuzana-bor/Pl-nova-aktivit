import React, { useState } from 'react';
import './search.css';
import { posts } from '../../data';

export const Search = () => {
  const [listOfTopic, setListOfTopic] = useState([]);

  const handleClick = () => {
    onSubmit(listOfTopic);
    setListOfTopic([]);
  };

  return (
    <>
      <form id="formOfSearch" className="search">
        <input
          onChange={(event) => setListOfTopic(event.target.value)}
          value={listOfTopic}
          id="query"
          type="text"
          placeholder="hledej"
        />
        <button onClick={handleClick} id="search" type="submit">
          Hledat
        </button>
      </form>
    </>
  );
};
