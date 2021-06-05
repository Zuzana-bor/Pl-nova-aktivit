import React from 'react';
import './experienceItems.css';

export const ExperienceItems = ({date,note}) => {
  const items =[
     {
       date: "04.08.2021",
       note: "Dominik má svátek"
     },

     {
      date: "05.06.2021",
      note: "Dnešní zážitek"
     },

     {
      date: "12.06.2021",
      note: "Zážitek na příští víkend"
     }
   ]

    return items.map(({date,note},index)=>(<article key={index} className="history__note">
      <div id="date__note">{date}</div>
      <div id="name__note">
        <a href="#">{note}</a>
      </div>
    </article>)
)};
