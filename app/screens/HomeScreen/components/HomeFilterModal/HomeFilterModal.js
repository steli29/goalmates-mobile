import React from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';

import { filterByOptions } from '../../../../project/constants';

import FilterOption from '../FilterOption/FilterOption';
import CloseSvg from '../../../../assets/svgs/CloseSvg';

import styles from "./styles";

const HomeFilterModal = ({ isVisible, onClose, selectedOption, setSelectedOption }) => {
    // TODO
    // Option for Newest Activity sorting
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
                {filterByOptions.map((option) => {
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
    selectedOption: PropTypes.string,
    setSelectedOption: PropTypes.func,
};

export default HomeFilterModal;