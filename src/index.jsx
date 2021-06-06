import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Inspiration } from './pages/Inspiration/Inspiration';
import { Planner } from './pages/Plans/Planner';
import { Diary } from './pages/Diary/Diary';
import { Topic } from './pages/Topic/Topic';

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
            <Planner />
          </Route>
          <Route exact path="/inspirace">
            <Inspiration />
          </Route>
          <Route path="/denik">
            <Diary />
          </Route>
          <Route path="/inspirace/:topic">
            <Topic />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

render(<App />, document.querySelector('#app'));
