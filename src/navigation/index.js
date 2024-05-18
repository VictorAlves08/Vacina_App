import React, {useEffect, useState} from 'react';

import BottomTabNavigator from './signedInNavigator/BottomTabNavigator';
import SignInNavigator from './signInNavigator/index';
import {DevSettings} from 'react-native';

const Routes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        DevSettings.addMenuItem('Change Routes', () =>
            setIsLoggedIn(prevState => !prevState),
        );
    }, []);

    return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
