import React, { useState } from 'react';
import { AddItem } from '../AddItem/AddItem';
import { ListItems } from '../ListItems/ListItems';
import './plans.css';

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

export const Plans = ({getQuote}) => {
  const [list, setList] = useState(items);
  const handleClick = (id) => {
    getQuote();
    setList(
      list.map((item) =>
        id === item.id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );
  };

  const handleSubmit = (activity) => {
    const count = list.length;
    setList([
      ...list,
      {
        name: activity,
        isChecked: false,
        id: count + 1,
      },
    ]);
  };
  return (
    <>
      <AddItem onSubmit={handleSubmit} />
      <ListItems list={list} onClick={handleClick} />
    </>
  );
};
