import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { useStore } from '../../zustand/root-reducer';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Button from '../../components/Button/Button';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

import styles from './styles';

const EditGoalScreen = ({ route }) => {
    // TODO:
    // - Possibility of editing of shared contacts
    const navigation = useNavigation();
    const updatePost = useStore((state) => state.updatePost);
    const { error } = useStore((state) => state.post);
    const clearPostError = useStore((state) => state.clearPostError);

    const { title, description, id } = route.params;
    const [goalTitle, setGoalTitle] = useState(title);
    const [goalDescription, setGoalDescription] = useState(description);
    const [isEditPressed, setIsEditPressed] = useState(false);

    const onUpdatePostPress = async () => {
        await updatePost(id, goalTitle, goalDescription);
        setIsEditPressed(true);
    };

    useEffect(() => {
        if (isEditPressed) {
            setIsEditPressed(false);
            if (!error) {
                setTimeout(() => {
                    navigation.goBack();
                }, 1000);
            }
        }
    }, [error, isEditPressed]);

    return (
        <View style={styles.mainContainer}>
            <ErrorModal error={error} onErrorClear={clearPostError} />
            <LabelWithTextInput
                label='Goal Title'
                inputField={goalTitle}
                onChangeInputField={setGoalTitle}
            />
            <LabelWithTextInput
                label='Goal Description'
                inputField={goalDescription}
                isMultiLine
                onChangeInputField={setGoalDescription}
            />
            <Button
                label='Edit Goal'
                buttonContainerStyle={styles.editButtonContainerStyle}
                onButtonPress={onUpdatePostPress}
            />
        </View>
    );
};

EditGoalScreen.propTypes = {
    route: PropTypes.object,
};

export default EditGoalScreen;
