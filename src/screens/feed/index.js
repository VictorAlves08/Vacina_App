import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Feed = ({navigation}) => {
    return (
        <View>
            <Text>Feed</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Stories')}>
                <Text>Go to Stories</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileTab', {
                screen: "Posts"
            })}>
                <Text>Go to Posts</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Feed;
