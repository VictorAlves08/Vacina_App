import React from 'react';
import {SafeAreaView, Button} from 'react-native';

import useAuth from '../../../hooks/useAuth';

const OnBoarding = () => {
    const {sigIn} = useAuth();
    return (
        <SafeAreaView>
            <Button onPress={sigIn} title="sigIn" />
        </SafeAreaView>
    );
};

export default OnBoarding;
