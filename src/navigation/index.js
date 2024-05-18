import React, {useContext} from 'react';

import {AuthContext} from '../context/Auth/index';

import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator/index';

const Routes = () => {
    const {isLoggedIn} = useContext(AuthContext);

    return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
