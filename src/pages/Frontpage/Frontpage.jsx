import React from 'react';
import { ContentWithImage } from '../../components/ContentWithImage/ContentWithImage';
import cat from './img/cat.jpg';
import './frontpage.css';

export const Frontpage = () => (
  <ContentWithImage
    clanek="Cílem appky je, aby si uživatel našel čas sám na sebe a zlepšil si tak
 work-life balance. Plánování probíhá zápisem aktivit, které by uživatel chtěl ve svém
 volném čase dělat. Po jejich splnění, si je odklikne. Má tak přehled o
 tom, zda se stíhá věnovat i svým koníčkům a přáním. Kromě plánování zde
je sekce s tipy v oblastech vztahy, kreativita a relax. Appka má prostor i pro vlastní zápisky (deník)."
    image={{ src: cat, alt: 'uvodni foto' }}
  />
);
