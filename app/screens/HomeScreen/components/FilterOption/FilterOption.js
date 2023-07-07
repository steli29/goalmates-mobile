import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import TickSvg from '../../../../assets/svgs/TickSvg';

import styles from './styles';

const FilterOption = ({ label, isSelected, onOptionPress}) => {
    const labelStyleSelected = isSelected ? styles.buttonLabelSelectedStyle : null;
    const containerStyleSelected = isSelected ? styles.mainContainerSelected : null;

    return (
        <TouchableOpacity
            style={[styles.mainContainer, containerStyleSelected]}
            onPress={onOptionPress}
        >
            <Text
                style={[styles.buttonLabelStyle, labelStyleSelected]}
            >
                {label}
            </Text>
            {
                isSelected ? (
                    <TickSvg />
                ) : null
            }
        </TouchableOpacity>
    )
};

FilterOption.propTypes = {
    label: PropTypes.string,
    isSelected: PropTypes.bool,
    onOptionPress: PropTypes.func,
}

export default FilterOption;