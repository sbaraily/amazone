import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';


const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
    <Route exact path='/' component={Home} />

    <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
