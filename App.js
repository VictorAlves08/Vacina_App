import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Header from './src/components/Header';

import {ThemeProvider} from 'styled-components/native';
import useAppearance from './src/hooks/useAppearance';

export default function App() {
    const {theme, handleChangeAppearance} = useAppearance();

    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView style={styles.container}>
                <Header handleChangeAppearance={handleChangeAppearance} />
            </SafeAreaView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
});
