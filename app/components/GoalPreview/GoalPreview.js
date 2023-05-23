import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import GoalIcon from '../GoalIcon/GoalIcon';

import styles from './styles';

const GoalPreview = ({ title, description }) => {
    return (
        <View style={[styles.mainContainer, styles.shadowEffect]}>
                <GoalIcon />
                <View style={styles.textContainer}>
                    <Text style={styles.titleTextStyle}>{title}</Text>
                    <Text style={styles.descriptionTextStyle}>{description}</Text>
                </View>
            {/* {deadline ? (
                <View style={styles.deadlineContainer}>
                    <View style={styles.divider} />
                    <View style={styles.row}>
                        <ClockSvg />
                        <Text style={[styles.descriptionTextStyle, styles.deadlineText]} >Deadline</Text>
                        <Text style={styles.descriptionTextStyle} >{deadline}</Text>
                    </View>
                </View>
            ) : null} */}
        </View>
    );
};

GoalPreview.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default GoalPreview;
