import React, { useState } from 'react';
import { ExperienceItems } from '../../components/ExperienceItems/ExperienceItems';
import { DiaryForm } from '../../components/DiaryForm/DiaryForm';
import './diary.css';

const items = [
  {
    date: '05.06.2021',
    note: 'Dnes jsme zažili ve Stromovce...',
    content: 'Prvni obsah'
  },

  {
    date: '06.06.2021',
    note: 'Dnešní procházka...',
    content: 'Druhy obsah'
  },
];

export const Diary = () => {
  const [seznam, setSeznam] = useState(items);

  const handleSubmit = (values) => {
    setSeznam([...seznam,values])
  };

  return (
    <>
      <div className="styleDiary">
        <ExperienceItems items={seznam} />
        <DiaryForm onSubmit={handleSubmit}/>
      </div>
    </>
  );
};
