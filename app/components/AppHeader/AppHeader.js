import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrowSvg from '../../assets/svgs/BackArrowSvg';

import styles from './styles';

const AppHeader = ({ title, navigation, isBackButtonHidden }) => {
    const onBackButtonPress = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView style={[styles.headerContainer, styles.shadowEffect]}>
            {!isBackButtonHidden ? (
                <TouchableOpacity onPress={onBackButtonPress}>
                    <BackArrowSvg color='#292D32' />
                </TouchableOpacity>
            ) : null}
            <Text style={styles.headerText}>{title}</Text>
        </SafeAreaView>
    );
};

AppHeader.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object,
    isBackButtonHidden: PropTypes.bool,
};

export default AppHeader;
