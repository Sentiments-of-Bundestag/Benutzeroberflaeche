import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FactionsPage from './containers/FactionsPage';
import HomePage from './containers/HomePage';

export interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/sentiment" component={FactionsPage} />
  </Switch>
);
