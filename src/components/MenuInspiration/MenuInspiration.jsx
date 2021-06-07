import React from 'react';
import './menuInspiration.css';
import { NavLink } from 'react-router-dom';

export const MenuInspiration = () => (
  <nav>
    <ul className="menuOfInspiration">
      <li>
        <NavLink exact className="menu-link" to="/inspirace/kreativita">
          Kreativita
        </NavLink>
      </li>
      <li>
        <NavLink className="menu-link" to="/inspirace/vztahy">
          Vztahy
        </NavLink>
      </li>
      <li>
        <NavLink className="menu-link" to="/inspirace/relaxace">
          Relaxace
        </NavLink>
      </li>
    </ul>
  </nav>
);
