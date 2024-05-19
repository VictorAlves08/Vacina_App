import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';

import useAuth from '../../../hooks/useAuth';

const Home = () => {
    const {sigOut, userData} = useAuth();

    return (
        <SafeAreaView>
            <Text>Welcome {userData?.name}</Text>
            <Button onPress={sigOut} title="sigOut" />
        </SafeAreaView>
    );
};

export default Home;
