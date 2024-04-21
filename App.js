import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'styled-components/native';
import useAppearance from './src/hooks/useAppearance';

import Navigation from './src/navigation';

export default function App() {
    const {theme} = useAppearance();

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </ThemeProvider>
    );
}
