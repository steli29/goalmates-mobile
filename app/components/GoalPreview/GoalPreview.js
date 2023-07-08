import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';

import GoalIcon from '../GoalIcon/GoalIcon';

import styles from './styles';

const GoalPreview = ({ title, description, progress }) => {
    return (
        <View style={[styles.mainContainer, styles.shadowEffect]}>
            <View style={styles.row}>
                <GoalIcon />
                <View style={styles.textContainer}>
                    <Text style={styles.titleTextStyle}>{title}</Text>
                    <Text style={styles.descriptionTextStyle}>{description}</Text>
                </View>
            </View>
            <View style={styles.progressBarContainer}>
                <Progress.Bar progress={progress} width={300} />
            </View>
        </View>
    );
};

GoalPreview.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    progress: PropTypes.number
};

export default GoalPreview;
