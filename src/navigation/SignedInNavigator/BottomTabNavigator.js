import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/signedIn/Home/index';
import Profile from '../../screens/signedIn/Profile/index';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="home"
                component={Home}
                options={{
                    header: () => null,
                    tabBarIcon: () => <Text>Home</Text>,
                }}
            />
            <BottomTab.Screen
                name="profile"
                component={Profile}
                options={{
                    header: () => null,
                    tabBarIcon: () => <Text>Profile</Text>,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
