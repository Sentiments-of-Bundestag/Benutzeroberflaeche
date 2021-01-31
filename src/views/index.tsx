import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const LandingView = React.lazy(() => import('./landing'));
const FactionsView = React.lazy(() => import('./factions'));
const PersonsView = React.lazy(() => import('./persons'));

const App: React.FC = () => (
  <Suspense fallback={<div className="loading" />}>
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <LandingView {...props} />} />
        <Route
          path="/factions"
          render={(props) => <FactionsView {...props} />}
        />
        <Route path="/persons" render={(props) => <PersonsView {...props} />} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
