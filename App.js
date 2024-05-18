import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'styled-components/native';
import useAppearance from './src/hooks/useAppearance';

import Routes from './src/navigation';
import {AuthProvider} from './src/context/Auth';

export default function App() {
    const {theme} = useAppearance();

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AuthProvider>
                    <Routes />
                </AuthProvider>
            </NavigationContainer>
        </ThemeProvider>
    );
}
