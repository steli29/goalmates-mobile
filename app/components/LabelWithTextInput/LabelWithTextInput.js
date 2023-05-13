import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const LabelWithTextInput = ({ label, inputField, isPassword, onChangeInputField, onFocus }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.labelTextStyle}>{label}</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={inputField}
                onChangeText={onChangeInputField}
                onFocus={onFocus}
                placeholder={label}
                secureTextEntry={isPassword}
                style={[styles.textInputStyle, styles.labelTextStyle]}
            />
        </View>
    );
};

LabelWithTextInput.propTypes = {
    label: PropTypes.string,
    inputField: PropTypes.string,
    isPassword: PropTypes.bool,
    onChangeInputField: PropTypes.func,
    onFocus: PropTypes.func,
};

export default LabelWithTextInput;
