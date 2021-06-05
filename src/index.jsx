import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/Header';
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Inspiration } from './pages/Inspiration/Inspiration';
import { AddItem } from './components/AddItem/AddItem';
import { ListItems } from './components/ListItems/ListItems';

const App = () => (
  <>
    <Header />
    <Frontpage />
    <Inspiration />
    <AddItem onSubmit={(value) => console.log(value)} />
    <ListItems />
  </>
);

render(<App />, document.querySelector('#app'));
