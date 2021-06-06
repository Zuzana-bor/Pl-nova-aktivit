import React from 'react';
import { ContentWithImage } from '../../components/ContentWithImage/ContentWithImage';
import spokojenost from './img/spokojenost.jpg';

export const Inspiration = () => (
  <ContentWithImage
    clanek="V této sekci naleznete tipy jak se dostat do životní rovnováhy. Tipy jsou roztříděny do 3 kategorií- Kreativita, Vztahy a Relaxace. Tyto oblasti života by měly být u nás všech rovnoměrně zastoupeny. Nechejte se inspirovat a udržujte si spokojený život."
    image={{ src: spokojenost, alt: 'spokojenost' }}
  />
);
