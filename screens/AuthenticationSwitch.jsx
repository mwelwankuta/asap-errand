import React, { useContext } from 'react';
import RootNavigation from './RootNavigation';
import AuthNavigation from './AuthNavigation';

import userContext from '../context/user';

export default function AuthenticationSwitch() {
  const { user } = useContext(userContext);
  if (!user) {
    return <AuthNavigation />;
  } else {
    return <RootNavigation />;
  }
}
