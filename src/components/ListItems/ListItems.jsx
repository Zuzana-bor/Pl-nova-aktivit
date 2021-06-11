import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './listItems.css';

export const ListItems = ({ list, onClick }) => {
  return (
    <>
      <div className="compListItems">
        <ul>
          {list.map((item) => (
            <li
              key={item.id}
              className={`item ${item.isChecked ? 'checked' : 'unchecked'}`}
              onClick={() => onClick(item.id)}
            >
              {item.name} {item.isChecked}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
