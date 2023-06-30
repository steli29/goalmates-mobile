import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const FilterOption = ({ label, isSelected, onOptionPress}) => {
    const labelStyleSelected = isSelected ? styles.buttonLabelSelectedStyle : null;

    return (
        <TouchableOpacity
            style={styles.mainContainer}
            onPress={onOptionPress}
        >
            <Text
                style={[styles.buttonLabelStyle, labelStyleSelected]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
};

FilterOption.propTypes = {
    label: PropTypes.string,
    isSelected: PropTypes.bool,
    onOptionPress: PropTypes.func,
}

export default FilterOption;