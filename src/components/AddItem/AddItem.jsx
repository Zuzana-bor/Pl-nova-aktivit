import React, { useState } from 'react';
import './addItem.css';

export const AddItem = ({ onSubmit }) => {
  const [activity, setActivity] = useState('');

  const handleClick = () => {
    onSubmit(activity);
    setActivity('');
  };
  return (
    <>
      <div className="compAddItem">
        <input
          onChange={(event) => setActivity(event.target.value)}
          value={activity}
          type="text"
          className="myInput"
          placeholder="Název..."
        />
        <button onClick={handleClick} className="addBtn">
          Přidat položku
        </button>
      </div>
    </>
  );
};
