import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './containers/App';

export interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);
