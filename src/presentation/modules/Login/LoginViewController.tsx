import React from 'react';
// import { Dispatch } from 'redux';
import LoginView from './LoginView';
import { useHistory } from 'react-router-dom';

const LoginViewController = () => {
  const history = useHistory();
  const onLogin = (username: string, password: string) => {
    history.push('/inicio');
    // dispatch(signInActions.signIn(username.trim(), password.trim()));
  };
  return <LoginView onLogin={onLogin} isLoading={false} />;
};

export default LoginViewController;
