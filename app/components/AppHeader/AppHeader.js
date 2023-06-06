import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

import SettingsSvg from '../../assets/svgs/SettingsSvg';
import BackArrowSvg from '../../assets/svgs/BackArrowSvg';

import styles from './styles';

const AppHeader = ({ title, navigation, route }) => {
    const onBackButtonPress = () => {
        navigation.goBack();
    };
    const isSettingsButtonVisible = route?.params?.isFromProfileScreen;
    const headerTextStyle = !isSettingsButtonVisible ? styles.headerTextWithoutSettings : null;
    return (
        <View style={styles.headerContainer}>
            {!route.params.isBackButtonHidden ? (
                <TouchableOpacity onPress={onBackButtonPress}>
                    <BackArrowSvg color='#292D32' />
                </TouchableOpacity>
            ) : null}
            <Text style={[styles.headerText, headerTextStyle]}>{title}</Text>
            {isSettingsButtonVisible ? (
                <TouchableOpacity>
                    <SettingsSvg />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

AppHeader.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object,
    route: PropTypes.object,
};

export default AppHeader;
