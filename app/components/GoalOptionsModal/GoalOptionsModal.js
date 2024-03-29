import React from 'react';
import Modal from 'react-native-modal';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Screens, goalOptions } from '../../project/constants';
import { useStore } from '../../zustand/root-reducer';

import styles from './styles';

const GoalOptionsModal = ({ isVisible, onClose, isCurrentUser, data, refreshScreen }) => {
    const navigation = useNavigation();

    const deletePost = useStore((state) => state.deletePost);
    const myUser = useStore((state) => state.myUser)

    const optionPressMethodPicker = (option) => {
        switch (option) {
            case 'Edit':
                return onEditPress;
            case 'Delete': 
                return onDeletePress;
            default:
                return () => undefined;
        }
    };

    const onEditPress = () => {
        navigation.navigate(Screens.EDIT_GOAL, {
            title: data.title,
            description: data.description,
            id: data.goalId
        });
    };

    const onDeletePress = async () => {
        await deletePost(data.goalId);
        refreshScreen();
        navigation.navigate(Screens.PROFILE, {
            user: myUser.data,
        });
    }

    const options = isCurrentUser ? goalOptions : null;
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
                    {options?.map((option, index) => {
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
                                key={`${option}`}
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
    refreshScreen: PropTypes.func,
    data: PropTypes.object,
};

export default GoalOptionsModal;
