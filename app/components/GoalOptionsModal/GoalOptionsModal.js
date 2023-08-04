import React from 'react';
import Modal from 'react-native-modal';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import styles from './styles';
import { Screens, currentUserOptions, otherUsersOptions } from '../../project/constants';

const GoalOptionsModal = ({ isVisible, onClose, isCurrentUser, data }) => {
    const navigation = useNavigation();

    const optionPressMethodPicker = (option) => {
        switch (option) {
            case 'Edit':
                return onEditPress;
            default:
                return () => undefined;
        }
    };

    const onEditPress = () => {
        navigation.navigate(Screens.EDIT_GOAL, {
            title: data.title,
            description: data.description,
        });
    };

    const options = isCurrentUser ? currentUserOptions : otherUsersOptions;
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            hideModalContentWhileAnimating
            useNativeDriver
            style={styles.modalContainer}
        >
            <View style={styles.mainContainer}>
                <View style={styles.optionsContainer}>
                    {options.map((option, index) => {
                        const isLast = index === options.length - 1;

                        const borderStyle = !isLast ? styles.borderBoxStyle : null;
                        const textStyle = isLast ? styles.lastOptionTextColor : null;

                        const onPressMethod = optionPressMethodPicker(option);
                        const onPressHandler = () => {
                            onClose();
                            onPressMethod();
                        };
                        return (
                            <TouchableOpacity
                                style={[styles.optionBoxStyle, borderStyle]}
                                onPress={onPressHandler}
                            >
                                <Text style={[styles.optionTextStyle, textStyle]}>{option}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </Modal>
    );
};

GoalOptionsModal.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    isCurrentUser: PropTypes.bool,
    data: PropTypes.object,
};

export default GoalOptionsModal;
