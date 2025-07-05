import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as screens from '../../modules';
import routes from './routingMap';

export default function AdminRoute() {
  return (
    <Switch>
      <Route
        path={routes.admin.home}
        exact
        component={screens.Home}
      />
      <Route path={routes.admin.logout} exact component={screens.Logout} />
      <Redirect to={routes.admin.home} />
    </Switch>
  );
}
