import React, { useContext } from 'react';
import RunnerView from './RunnerView';
import UserView from './UserView';

import userContext from '../../context/user';
export default function Messages() {
  const { user } = useContext(userContext);

  if (user && user.errand_in_progress) {
    <RunnerView />;
  } else return <UserView />;
}
