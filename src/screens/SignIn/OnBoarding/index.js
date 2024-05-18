import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {AuthContext} from '../../../context/Auth/index';

const OnBoarding = () => {
    const context = useContext(AuthContext);

    return (
        <View>
            <Text>OnBoarding</Text>
        </View>
    );
};

export default OnBoarding;
