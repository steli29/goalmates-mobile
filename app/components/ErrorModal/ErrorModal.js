import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { Text, View, TouchableOpacity } from 'react-native';
import { useStore } from '../../zustand/root-reducer';
import styles from './styles';

const ErrorModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { error } = useStore((state) => state.user);
    const clearError = useStore((state) => state.clearError);

    const onClose = () => {
        setIsModalVisible(false);
        clearError();
    };

    useEffect(() => {
        if (error) {
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

export default ErrorModal;
