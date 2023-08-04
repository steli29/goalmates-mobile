import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SectionHeaderButton = ({ labelOption, onPress, selected }) => {

    const isCurrentSectionSelected = selected === labelOption;
	const selectedButtonStyle = isCurrentSectionSelected ? styles.selectedButtonBackground : null;

    return (
        <TouchableOpacity
			onPress={onPress}
			style={[styles.mainContainer, selectedButtonStyle]}
		>
			<Text
				style={styles.buttonLabelStyle}
			>
				{labelOption}
			</Text>
		</TouchableOpacity>
    );
};

SectionHeaderButton.propTypes = {
    labelOption: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.string,
}

export default SectionHeaderButton