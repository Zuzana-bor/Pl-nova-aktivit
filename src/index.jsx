import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/Header';
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Inspiration } from './pages/Inspiration/Inspiration';
import { Planner } from './pages/Plans/Planner';

const App = () => (
  <>
    <Header />
    <Frontpage />
    <Inspiration />

    <Planner />
  </>
);

render(<App />, document.querySelector('#app'));
