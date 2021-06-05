import React from 'react';
import './experienceItems.css';

export const ExperienceItems = ({items}) => {
    return (
    <div>
    {items.map(({date,note},index)=><article key={index} className="history__note">
      <div id="date__note">{date}</div>
      <div id="name__note">
        <a href="#">{note}</a>
      </div>
    </article>)}
    </div>
)};
