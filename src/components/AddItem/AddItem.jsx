import React, { useState } from 'react';
import './addItem.css';

export const AddItem = ({ onSubmit }) => {
  const [activity, setActivity] = useState('');

  const handleClick = () => {
    onSubmit(activity);
  };
  return (
    <>
      <input
        onChange={(event) => setActivity(event.target.value)}
        value={activity}
        type="text"
        id="myInput"
        placeholder="Název..."
      />
      <button onClick={handleClick} className="addBtn">
        Přidat položku
      </button>
    </>
  );
};
