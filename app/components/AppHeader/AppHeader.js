import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Screens } from '../../project/constants';

import BackArrowSvg from '../../assets/svgs/BackArrowSvg';

import styles from './styles';
import AppContext from '../../contexts/AppContext';

const AppHeader = ({ title, navigation, isBackButtonHidden, route }) => {
    const { onSaveDraftModalOpen } = useContext(AppContext);

    const onBackButtonPress = () => {
        if (route.name === Screens.CREATE_GOAL) {
            onSaveDraftModalOpen();
        } else {
            navigation.goBack();
        }
    };
    return (
        <SafeAreaView style={[styles.safeAreaContainer, styles.shadowEffect]} edges={['top']}>
            <View style={styles.internalContainer}>
                {!isBackButtonHidden ? (
                    <TouchableOpacity onPress={onBackButtonPress}>
                        <BackArrowSvg color='#292D32' />
                    </TouchableOpacity>
                ) : null}
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </SafeAreaView>
    );
};

AppHeader.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object,
    isBackButtonHidden: PropTypes.bool,
    route: PropTypes.object,
};

export default AppHeader;
