import React, { useState } from 'react';
import './listItems.css';

const items = [
  {
    name: 'Jít na procházku',
    isChecked: false,
    id: 1,
  },
  {
    name: 'Aromaterapie',
    isChecked: false,
    id: 2,
  },
  {
    name: 'Relaxační masáž',
    isChecked: true,
    id: 3,
  },
  {
    name: 'Keramika',
    isChecked: false,
    id: 4,
  },
];

export const ListItems = () => {
  const [list, setList] = useState(items);
  const handleClick = (id) => {
    setList(
      list.map((item) =>
        id === item.id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );
  };

  return (
    <ul>
      {list.map((item) => (
        <li
          key={item.id}
          className={item.isChecked ? 'checked' : ''}
          onClick={() => handleClick(item.id)}
        >
          {item.name} {item.isChecked}
        </li>
      ))}
    </ul>
  );
};
