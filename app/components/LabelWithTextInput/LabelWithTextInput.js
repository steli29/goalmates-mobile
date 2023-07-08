import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Label from '../Label/Label';

const LabelWithTextInput = ({ label, inputField, isPassword, isMultiLine, onChangeInputField }) => {
    const multilineProps = isMultiLine
        ? {
              multiline: true,
              textAlignVertical: 'top',
          }
        : null;
    const passwordProps = isPassword
        ? {
              secureTextEntry: true,
          }
        : null;
    const textInputStyleMultiline = isMultiLine ? styles.textInputStyleMultiline : null;
    return (
        <View style={styles.mainContainer}>
            <Label label={label} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                value={inputField}
                onChangeText={onChangeInputField}
                placeholder={`Your ${label}`}
                style={[styles.textInputStyle, textInputStyleMultiline, styles.labelTextStyle]}
                {...passwordProps}
                {...multilineProps}
            />
        </View>
    );
};

LabelWithTextInput.propTypes = {
    label: PropTypes.string,
    inputField: PropTypes.string,
    isPassword: PropTypes.bool,
    isMultiLine: PropTypes.bool,
    onChangeInputField: PropTypes.func,
};

export default LabelWithTextInput;
