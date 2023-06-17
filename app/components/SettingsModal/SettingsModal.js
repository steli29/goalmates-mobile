import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';

import PropTypes from 'prop-types';
import styles from './styles';
import { useStore } from '../../zustand/root-reducer';

const SettingsModal = ({ isVisible, onClose }) => {
    const logout = useStore((state) => state.user.logout);
    return (
        <Modal 
            isVisible={isVisible}
            hideModalContentWhileAnimating
            onBackdropPress={onClose}
            useNativeDriver
        >
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={logout}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

SettingsModal.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
};

export default SettingsModal;
