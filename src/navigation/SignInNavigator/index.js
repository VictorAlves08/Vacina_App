import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnBoarding from '../../screens/SignIn/OnBoarding/index';
import Access from '../../screens/SignIn/Access/index';
import Login from '../../screens/SignIn/Login/index';
import SignUp from '../../screens/SignIn/SignUp/index';

const Stack = createNativeStackNavigator();

const SignInNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="onBoarding">
            <Stack.Screen name="onBoarding" component={OnBoarding} />
            <Stack.Screen name="access" component={Access} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signUp" component={SignUp} />
        </Stack.Navigator>
    );
};

export default SignInNavigator;
