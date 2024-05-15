import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Profile = ({navigation, route}) => {
    const {isFromHome} = route.params;
    return (
        <View>
            <Text>Profile</Text>
            <Text>isFromHome: {isFromHome ? 'yes' : 'no'}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
