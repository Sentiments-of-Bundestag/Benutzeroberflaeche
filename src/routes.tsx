import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FactionsPage from './containers/FactionsPage';
import FactionDetailPage from './containers/FactionDetailPage';
import PersonsPage from './containers/PersonsPage';

export interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
  <Switch>
    <Route exact path="/" component={FactionsPage} />
    <Route exact path="/factions" component={FactionsPage} />
    <Route path="/factions/:id" component={FactionDetailPage} />
    <Route exact path="/persons" component={PersonsPage} />
  </Switch>
);
