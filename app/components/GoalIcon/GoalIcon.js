import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import BulbSvg from '../../assets/svgs/BulbSvg';

const GoalIcon = () => {
    return (
        <View style={styles.mainContainer}>
            <BulbSvg />
        </View>
    );
};

export default GoalIcon;
