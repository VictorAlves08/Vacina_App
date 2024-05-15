import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Feed from '../screens/feed';
import Stories from '../screens/stories';

const Stack = createNativeStackNavigator();

const HomeStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="Stories" component={Stories} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigation;
