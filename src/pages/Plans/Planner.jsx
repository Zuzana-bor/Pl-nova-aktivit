import React from 'react';
import './planner.css';
import { Plans } from '../../components/Plans/Plans';

export const Planner = () => (
  <>
    <div className="planner">
      <div className="activity">
        <h1>Můj seznam aktivit</h1>
        </div>
        <Plans />
      
    </div>
  </>
);
