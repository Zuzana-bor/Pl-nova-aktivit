import React, { useState } from 'react';
import './search.css';
import { posts } from '../../data';

export const Search = ({searching}) => {
  
const handleSubmit = (result) => {
  searching(result);
   
  };
  
  return (
    <>
      <form onSubmit={handleSubmit} id="formOfSearch" className="search">
        <input
          onChange={(event) => setListOfTopic(event.target.value)}
          value={listOfTopic}
          id="query"
          type="text"
          placeholder="hledej"
        />
        <button onClick={handleSubmit} id="search" type="submit">
          Hledat
        </button>
      </form>
    </>
  );
};
