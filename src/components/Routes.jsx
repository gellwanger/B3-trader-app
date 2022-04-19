import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/home" component={ Home } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
