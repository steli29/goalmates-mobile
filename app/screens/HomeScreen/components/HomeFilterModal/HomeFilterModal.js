import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';

import styles from "./styles";
import FilterOption from '../FilterOption/FilterOption';
import CloseSvg from '../../../../assets/svgs/CloseSvg';

const HomeFilterModal = ({ isVisible, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('Most Recent');
    const options = ['Most Recent', 'Most Commented', 'Newest Activity'];

    const onOptionPress = (optionValue) => {
        setSelectedOption(optionValue);
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            hideModalContentWhileAnimating
            useNativeDriver
            style={styles.modalContainer}
        >
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.closeIconsStyle}
                    >
                        <CloseSvg />
                    </TouchableOpacity>
                    <Text style={styles.headerTitleStyle}>Sort by:</Text>
                </View>
                {options.map((option) => {
                    return (
                        <FilterOption 
                            label={option}
                            onOptionPress={() => onOptionPress(option)}
                            isSelected={option === selectedOption}
                            key={option}
                        />
                    )
                })}
            </View>
        </Modal>
    )
}

HomeFilterModal.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
};

export default HomeFilterModal;