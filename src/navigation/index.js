import React from 'react';

import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator/index';

import useAuth from '../hooks/useAuth';

const Routes = () => {
    const {isSignedIn} = useAuth();

    return isSignedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
