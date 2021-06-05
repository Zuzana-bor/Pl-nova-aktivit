import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/Header';
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Inspiration } from './pages/Inspiration/Inspiration';

const App = () => (
  <>
    <Header />
    <Frontpage />
    <Inspiration />
  </>
);

render(<App />, document.querySelector('#app'));
