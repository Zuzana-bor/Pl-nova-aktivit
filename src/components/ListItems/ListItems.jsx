import React, { useState } from 'react';
import './listItems.css';

export const ListItems = ({ list, onClick }) => {
  return (
    <ul>
      {list.map((item) => (
        <li
          key={item.id}
          className={item.isChecked ? 'checked' : ''}
          onClick={() => onClick(item.id)}
        >
          {item.name} {item.isChecked}
        </li>
      ))}
    </ul>
  );
};
