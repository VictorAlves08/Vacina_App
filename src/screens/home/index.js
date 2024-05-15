import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
    const goToProfile = () => navigation.navigate('Profile');
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={goToProfile}>
                <Text>Go to Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
