import React from 'react';
import Spinner from '../../components/Spinner';

const SplashViewController: React.FC = () => (
  <div style={{ height: '100vh', width: '100vw' }} data-testid="cmp-splash-view-controller">
    <Spinner />
  </div>
);

export default SplashViewController;
