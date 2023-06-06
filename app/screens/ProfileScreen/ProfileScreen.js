import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import AvatarImage from '../../components/AvatarImage/AvatarImage';

import styles from './styles';

const ProfileScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <AvatarImage 
                size={100}
            />
        </View>
    );
};

export default ProfileScreen;
