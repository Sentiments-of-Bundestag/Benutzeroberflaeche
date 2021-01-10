import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FactionsPage from './containers/FactionsPage';

export interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
  <Switch>
    <Route exact path="/" component={FactionsPage} />
  </Switch>
);
