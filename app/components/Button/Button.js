import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ onButtonPress, label }) => {
    return (
        <TouchableOpacity
            onPress={onButtonPress}
        >
            <Text>
                {label}
            </Text>
        </TouchableOpacity>
    )
};

Button.propTypes = {
    onButtonPress: PropTypes.func,
    label: PropTypes.string,
}

export default Button;