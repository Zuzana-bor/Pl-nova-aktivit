import React, { useState, useEffect } from 'react';
import './planner.css';
import { Plans } from '../../components/Plans/Plans';

export const Planner = () => {
  const [quote, setQuote] = useState(' ');
  
  const getQuote = () => {
    setQuote("Citat")
    //fetch(`https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/`)
      //.then((response) => response.json())
      //.then((json) => setQuote(json.affirmation));
  };

  return (
    <>
      <div className="planner">
        <div className="activity">
          <h1>Můj seznam aktivit</h1>
          <div>
            <li className="citat">{quote}</li>
          </div>
        </div>
        <Plans getQuote={getQuote} />
      </div>
    </>
  );
};
