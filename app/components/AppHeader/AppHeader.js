import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

import BackArrowSvg from '../../assets/svgs/BackArrowSvg';

import styles from './styles';

const AppHeader = ({ title, navigation, route }) => {
    const onBackButtonPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.headerContainer}>
            {!route.params.isBackButtonHidden ? (
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
    route: PropTypes.object,
};

export default AppHeader;
