import React from 'react';
import { Route } from 'react-router-dom';
import * as Screens from '../../modules';
import UserRoute from './userRoute';
// import AdminRoute from './AdminRoute';

const Main = () => {
  return (
    <Route
      render={() => (true ? <UserRoute /> : <Screens.Login />)}
    />
  );
};

export default Main;
