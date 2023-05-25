import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { Text, View, TouchableOpacity } from 'react-native';
import { useStore } from '../../zustand/root-reducer';
import styles from './styles';

const ErrorModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const user = useStore((state) => state.user);
    const clearError = useStore((state) => state.clearError);

    const onClose = () => {
        setIsModalVisible(false);
        clearError();
    };

    useEffect(() => {
        setIsModalVisible(false);
        if (user.error !== null) {
            setIsModalVisible(true);
        }
    }, [user.error]);

    return (
        <Modal 
            isVisible={isModalVisible} 
            useNativeDriver 
            hideModalContentWhileAnimating
            >
            <View style={styles.mainContainer}>
                <Text style={styles.errorHeaderText}>Error</Text>
                <Text style={styles.errorDetailsText}>{user.error}</Text>
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
