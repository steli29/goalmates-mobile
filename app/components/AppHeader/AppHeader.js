import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

import BackArrowSvg from '../../assets/svgs/BackArrowSvg';

import styles from './styles';

const AppHeader = ({ title, navigation, isBackButtonHidden }) => {
    const onBackButtonPress = () => {
        navigation.goBack();
    };
    console.log()
    return (
        <View style={styles.headerContainer}>
            {!isBackButtonHidden ? (
                <TouchableOpacity onPress={onBackButtonPress}>
                    <BackArrowSvg color='#292D32' />
                </TouchableOpacity>
            ) : null}
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

AppHeader.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object,
    isBackButtonHidden: PropTypes.bool,
};

export default AppHeader;
