import React from 'react';

import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator/index';

import useAuth from '../hooks/useAuth';

const Routes = () => {
    const {isLoggedIn} = useAuth();

    return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
