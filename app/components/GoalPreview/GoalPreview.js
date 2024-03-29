import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';

import GoalIcon from '../GoalIcon/GoalIcon';

import styles from './styles';
import { bp } from '../../project/utils/relativeUnitUtils';

const GoalPreview = ({ title, description, progress }) => {
    const progressPercent = progress ? progress / 100 : 0;
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
                <Progress.Bar progress={progressPercent} width={bp(270)} />
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
