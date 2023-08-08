import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { sectionsInComment } from '../../../../project/constants';

import SectionHeaderButton from '../SectionHeaderButton/SectionHeaderButton';

import styles from './styles';

const SectionHeader = ({ selected, changeOption }) => {

    return (
        <View style={styles.mainContainer}>
            {sectionsInComment.map((option) => {
                const onPressButton = () => {
                    changeOption(option);
                };

                return (
                    <SectionHeaderButton
                        labelOption={option}
                        selected={selected}
                        onPress={onPressButton}
                        key={`section_${option}`}
                    />
                );
            })}
        </View>
    );
};

SectionHeader.propTypes = {
    selected: PropTypes.string,
    changeOption: PropTypes.func,
};

export default SectionHeader;
