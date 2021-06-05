import React from 'react';
import './menu.css';
import {NavLink} from 'react-router-dom';

export const Menu = () => (
  <nav>
    <ul className="menu">
      <li>
        <NavLink className="menu-link" to="/">Domů</NavLink>
      </li>
      <li>
        <NavLink className="menu-link" to="/planovac">Plánovač</NavLink>
      </li>
      <li>
        <NavLink className="menu-link" to="/inspirace">Inspirace</NavLink>
      </li>
      <li>
        <NavLink className="menu-link" to="/denik">Deník</NavLink>
      </li>
    </ul>
  </nav>
);
