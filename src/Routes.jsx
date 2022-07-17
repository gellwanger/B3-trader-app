import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateNewAccount from './pages/CreateNewAccount';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/create-new-account" component={ CreateNewAccount } />
      <Route exact path="/main" component={ Main } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
