import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackNavigation from './homeStackNavigation';
import ProfileStackNavigation from './profileStackNavigation';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={HomeStackNavigation}
                options={{
                    header: () => null,
                    tabBarIcon: () => <Text>Home</Text>,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileStackNavigation}
                options={{
                    header: () => null,
                    tabBarIcon: () => <Text>Profile</Text>,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabs;
