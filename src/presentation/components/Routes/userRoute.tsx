import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as screens from '../../modules';
import Layout from '../Layout';
import routes from './routingMap';

export default function UserRoute() {
  // comentado temporal const [closeAcademicCalendar]: any = useState(false);
  // const { isSimulator } = useSelector((state: any) => state.simulator);
  const isSimulator = false;
  return (
    <>
      <Layout />
      <div style={{ marginBottom: isSimulator ? 70 : 0 }}>
        <Switch>
          <Route
            exact
            path={routes.error}
            component={screens.Error}
          />
          <Route
            exact
            path={routes.welcome}
            component={screens.Welcome}
          />
          <Route
            exact
            path={routes.user.login}
            component={screens.Login}
          />
          <Route
            exact
            path={routes.user.main.home}
            component={screens.Home}
          />
          <Route
            exact
            path={routes.doctor.schedules}
            component={screens.DoctorScheduleAvailable}
          />
          <Redirect to="/inicio" />
        </Switch>
      </div>
    </>
  );
}
