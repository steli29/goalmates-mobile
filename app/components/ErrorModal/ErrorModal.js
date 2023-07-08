import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ErrorModal = ({ error, onErrorClear }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onClose = () => {
        setIsModalVisible(false);
        setTimeout(() => onErrorClear(), 600);
    };

    useEffect(() => {
        setIsModalVisible(false);
        if (error !== null) {
            setIsModalVisible(true);
        }
    }, [error]);

    return (
        <Modal 
            isVisible={isModalVisible} 
            useNativeDriver 
            hideModalContentWhileAnimating
            >
            <View style={styles.mainContainer}>
                <Text style={styles.errorHeaderText}>Error</Text>
                <Text style={styles.errorDetailsText}>{error}</Text>
                <View style={styles.errorFooterContainer}>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

ErrorModal.propTypes = {
    error: PropTypes.string,
    onErrorClear: PropTypes.func,
}

export default ErrorModal;
