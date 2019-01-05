import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Departments from './components/Departments';
import Department from './components/Department';
import Product from './components/Product';
import Review from './components/Review';




const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/departments/' component={Departments} />
      <Route exact path='/departments/:id' component={Department} />
      <Route exact path='/departments/:department_id/products/:id' component={Product} />
      <Route exact path='/departments/:department_id/products/:product_id/reviews/:id' component={Review} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App;
