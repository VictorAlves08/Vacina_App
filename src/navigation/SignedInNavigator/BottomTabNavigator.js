import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/SignedIn/Home';
import Profile from '../../screens/SignedIn/Profile';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => <Text>HomeIcon</Text>,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: () => <Text>ProfileIcon</Text>,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
