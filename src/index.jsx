import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Planovac = () => {
  return <h2>Plánovač aktivit</h2>;
};

const Inspirace = () => {
  return <h2>Inspirace</h2>;
};

const Denik = () => {
  return <h2>Deník</h2>;
};

const Domu = () => {
  return <h2>Domů</h2>;
};

const App = () => (
  <>
    <Header />
    <Router>
      <Menu />
      <div>
        <Switch>
          <Route path="/planovac">
            <Planovac />
          </Route>
          <Route path="/inspirace">
            <Inspirace />
          </Route>
          <Route path="/denik">
            <Denik />
          </Route>
          <Route exact path="/">
            <Domu />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

render(<App />, document.querySelector('#app'));
