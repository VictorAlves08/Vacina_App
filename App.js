import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'styled-components/native';
import useAppearance from './src/hooks/useAppearance';

import BottomTabs from './src/navigation/bottomTabs';

export default function App() {
    const {theme} = useAppearance();

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <BottomTabs />
            </NavigationContainer>
        </ThemeProvider>
    );
}
