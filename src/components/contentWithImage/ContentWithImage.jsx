import React from 'react';
import './contentWithImage.css';

export const ContentWithImage = ({ clanek, image }) => (
  <section className="project">
    <div className="contentOfProject">{clanek}</div>
    <figure className="imageConteiner">
      <img className="image" {...image} />
    </figure>
  </section>
);
