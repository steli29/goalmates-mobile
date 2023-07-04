import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'
import PropTypes from 'prop-types';

import styles from './styles';

const GoalTextField = ({ label, value, onChangeValue, isDropDown, dropdownData, zIndex, zIndexInverse }) => {
    const [isOpen, setIsOpen] = useState(false);
    if (isDropDown) {
        return (
            <View style={[styles.mainContainer, { zIndex }]}>
                <Text style={styles.textLabelStyle}>{label}</Text>
                <DropDownPicker 
                    items={dropdownData}
                    value={value}
                    setValue={onChangeValue}
                    open={isOpen}
                    setOpen={setIsOpen}
                    textStyle={styles.textValueStyle}
                    zIndex={zIndex}
                    zIndexInverse={zIndexInverse}
                    listMode='FLATLIST'
                    dropDownDirection='BOTTOM'
                    // style={styles.dropDownMainStyle}
                    // containerStyle={styles.dropDownContainerStyle}
                    // dropDownContainerStyle={styles.dropDownDropContainerStyle}
                />
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textLabelStyle}>{label}</Text>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                value={value}
                onChangeText={onChangeValue}
                placeholder={label}
                style={styles.textValueStyle}
            />
        </View>
    );
};

GoalTextField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChangeValue: PropTypes.func,
    isDropDown: PropTypes.bool,
    dropdownData: PropTypes.array,
    zIndex: PropTypes.number,
    zIndexInverse: PropTypes.number,
};

export default GoalTextField;
