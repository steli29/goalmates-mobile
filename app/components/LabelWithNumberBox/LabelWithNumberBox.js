import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const LabelWithNumberBox = ({ label, number }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.numberTextStyle}>{number}</Text>
            <Text style={styles.labelTextStyle}>{label}</Text>
        </View>
    )
};

LabelWithNumberBox.propTypes = {
    label: PropTypes.string,
    number: PropTypes.number,
};

export default LabelWithNumberBox;