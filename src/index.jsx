import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Inspiration } from './pages/Inspiration/Inspiration';
import { ExperienceItem } from './components/ExperienceItem/ExperienceItem';

const Planovac = () => {
  return <h2>Plánovač aktivit</h2>;
};

const Denik = () => {
  return <h2>Deník</h2>;
};

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
            <Denik />
          </Route>
        </Switch>
      </div>
    </Router>
   <ExperienceItem/>
  </>
);

render(<App />, document.querySelector('#app'));
