import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Profile = ({navigation}) => {
    return (
        <View>
            <Text>Profile</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
                <Text>Go to Posts</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
