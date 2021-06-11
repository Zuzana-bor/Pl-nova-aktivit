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

  function compare(a, b) {
    if (a.isChecked===b.isChecked) {
      return 0;
    }
    if (a.isChecked&&!b.isChecked) {
      return 1;
    }
    if (!a.isChecked&&b.isChecked) {
      return -1;
    }
  }

  const handleClick = (id) => {
    getQuote();
    let count=0;
    setList(
      list.map((item) =>
        id === item.id ? { ...item, isChecked: !item.isChecked } : item,
      ).filter((item)=>{
        if (item.isChecked) {
          count=count+1;
          if (count>2) {
            return false;
          } else {
            return true;
          }

        } else {
            return true
        }
       }).sort(compare),
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
