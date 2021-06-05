import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Inspiration } from './pages/Inspiration/Inspiration';
import {Diary} from './pages/Diary/Diary';

const Planovac = () => {
  return <h2>Plánovač aktivit</h2>;
};

import { Plans } from './components/Plans/Plans';

const App = () => (
  <>
    <Header />
    <Router>
      <Menu />
      <div>
        <Switch>
          <Route exact path="/">
            <Frontpage />
          </Route>
          <Route path="/planovac">
            <Planovac />
          </Route>
          <Route path="/inspirace">
            <Inspiration />
          </Route>
          <Route path="/denik">
            <Diary />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

render(<App />, document.querySelector('#app'));
