import React from 'react';
import Modal from 'react-native-modal';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import styles from './styles';

const SaveDraftModal = ({ isVisible, onClose, onSaveDraft, onDiscardDraft }) => {
    const navigation = useNavigation();

    const onDiscardPress = () => {
        onClose();
        onDiscardDraft();
        navigation.goBack();
    };

    const onSaveDraftPress = async () => {
        await onSaveDraft();
        onClose();
        navigation.goBack();
    }

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            hideModalContentWhileAnimating
            useNativeDriver
            style={styles.modalContainer}
        >
            <View style={styles.mainContainer}>
                <Text style={styles.headerTextStyle}>Save Draft</Text>
                <Text style={styles.messageTextStyle}>
                    Save your changes and come back to finish your goal later.
                </Text>
                <View style={styles.buttonsContainerWrapper}>
                    <Button
                        label='Discard'
                        buttonContainerStyle={[styles.buttonStyle, styles.discarButtonStyle]}
                        textStyle={styles.discardButtonTextStyle}
                        onButtonPress={onDiscardPress}
                    />
                    <Button
                        label='Save'
                        buttonContainerStyle={styles.buttonStyle}
                        onButtonPress={onSaveDraftPress}
                    />
                </View>
            </View>
        </Modal>
    );
};

SaveDraftModal.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    onSaveDraft: PropTypes.func,
    onDiscardDraft: PropTypes.func,
};

export default SaveDraftModal;
