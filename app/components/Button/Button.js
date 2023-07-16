import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({ onButtonPress, label, buttonContainerStyle, textStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.mainContainer, buttonContainerStyle]}
            onPress={onButtonPress}
        >
            <Text style={[styles.labelTextStyle, textStyle]}>{label}</Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onButtonPress: PropTypes.func,
    label: PropTypes.string,
    buttonContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Button;
