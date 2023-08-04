import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Button from '../../components/Button/Button';

import styles from './styles';

const EditGoalScreen = ({ route }) => {
    // TODO:
    // - Possibility of editing of shared contacts
    const { title, description } = route.params;
    const [goalTitle, setGoalTitle] = useState(title);
    const [goalDescription, setGoalDescription] = useState(description);
    return (
        <View style={styles.mainContainer}>
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
            <Button label='Edit Goal' buttonContainerStyle={styles.editButtonContainerStyle} />
        </View>
    );
};

EditGoalScreen.propTypes = {
    route: PropTypes.object,
};

export default EditGoalScreen;
