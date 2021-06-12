import React, { useState } from 'react';
import { ExperienceItems } from '../../components/ExperienceItems/ExperienceItems';
import { DiaryForm } from '../../components/DiaryForm/DiaryForm';
import './diary.css';

const items = [
  {
    date: '05.06.2021',
    note: 'Jednou ve Stromovce...',
    content: 'Prvni obsah',
  },

  {
    date: '11.06.2021',
    note: 'Dnešní procházka...',
    content: 'Druhy obsah',
  },
];

export const Diary = () => {
  const [seznam, setSeznam] = useState(items);

  const handleSubmit = (values) => {
    setSeznam([...seznam, values]);
  };

  return (
    <>
      <div className="styleDiary">
        <div>
          <h4 className="nadpis_historie">Historie</h4>
          <div className="historie__conteiner">
            <ExperienceItems items={seznam} />
          </div>
        </div>
        <DiaryForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};
