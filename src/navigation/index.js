import React from 'react';

import BottomTabNavigator from './signedInNavigator/BottomTabNavigator';
import SignInNavigator from './signInNavigator/index';

const Routes = () => {
    const isLoggedIn = false;

    return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
