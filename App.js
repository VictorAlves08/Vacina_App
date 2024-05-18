import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'styled-components/native';
import useAppearance from './src/hooks/useAppearance';

import Routes from './src/navigation/index';

export default function App() {
    const {theme} = useAppearance();

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
}
