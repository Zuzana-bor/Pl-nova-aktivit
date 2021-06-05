import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/Header';
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Inspiration } from './pages/Inspiration/Inspiration';

import { Plans } from './components/Plans/Plans';

const App = () => (
  <>
    <Header />
    <Frontpage />
    <Inspiration />

    <Plans />
  </>
);

render(<App />, document.querySelector('#app'));
