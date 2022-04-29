import React, { useContext } from 'react';
import { AuthNavigation } from './index';

import userContext from '../context/user';
import RootNavigation from './RootNavigation';

export default function AuthenticationSwitch() {
  const { user } = useContext(userContext);
  if (!user) {
    return <AuthNavigation />;
  } else {
    return <RootNavigation />;
  }
}
