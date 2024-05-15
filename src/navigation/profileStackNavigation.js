import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../screens/profile';
import Posts from '../screens/posts';

const Stack = createNativeStackNavigator();

const ProfileStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Posts" component={Posts} />
        </Stack.Navigator>
    );
};

export default ProfileStackNavigation;