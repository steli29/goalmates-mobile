import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BottomLink = ({ headline, buttonLabel, onLabelPress }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={[styles.textStyle, styles.headLineTextStyle]}>{headline} </Text>
            <TouchableOpacity onPress={onLabelPress}>
                <Text style={[styles.textStyle, styles.buttonLabelText]}>{buttonLabel}</Text>
            </TouchableOpacity>
        </View>
    );
};

BottomLink.propTypes = {
    headline: PropTypes.string,
    buttonLabel: PropTypes.string,
    onLabelPress: PropTypes.func,
};

export default BottomLink;
