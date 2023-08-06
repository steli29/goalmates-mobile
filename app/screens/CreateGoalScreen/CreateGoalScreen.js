import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

import AppContext from '../../contexts/AppContext';
import { getDraft, saveDraft } from '../../project/api/helpers';
import { isEmptyObj } from '../../project/helpers/helper-functions';
import { useStore } from '../../zustand/root-reducer';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Label from '../../components/Label/Label';
import EmailChipTextInput from './components/EmailChipTextInput/EmailChipTextInput';
import Button from '../../components/Button/Button';
import SaveDraftModal from '../../components/SaveDraftModal/SaveDraftModal';

import styles from './styles';

const CreateGoalScreen = ({ navigation }) => {
    const [goalTitle, setGoalTitle] = useState('');
    const [goalDescription, setGoalDescription] = useState('');
    const [emails, setEmails] = useState([]);

    const createPost = useStore((state) => state.createPost);

    const { isSaveDraftModalOpen, onSaveDraftModalClose, onSetDraftDataAvailable } =
        useContext(AppContext);

    const onFocus = async () => {
        const result = await getDraft();

        if (!isEmptyObj(result)) {
            setGoalTitle(result.goalTitle);
            setGoalDescription(result.goalDescription);
            setEmails(result.emails);

            saveDraft({});
            onSetDraftDataAvailable(true);
        }
    };

    const onUploadPress = async () => {
        await createPost(goalTitle, goalDescription, emails);
        onDiscardDraft();
        navigation.goBack();
    };

    const onSaveDraft = () => {
        saveDraft({
            goalTitle,
            goalDescription,
            emails,
        });
    };

    const onDiscardDraft = () => {
        setGoalTitle('');
        setGoalDescription('');
        setEmails([]);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            onSetDraftDataAvailable(false);
            onFocus();
        });

        return () => {
            unsubscribe();
        };
    }, [navigation]);

    useEffect(() => {
        if (goalDescription || goalTitle || emails.length > 0) {
            onSetDraftDataAvailable(true);
        } else {
            onSetDraftDataAvailable(false);
        }
    }, [goalTitle, goalDescription, emails]);

    return (
        <>
            <SaveDraftModal
                isVisible={isSaveDraftModalOpen}
                onClose={onSaveDraftModalClose}
                onSaveDraft={onSaveDraft}
                onDiscardDraft={onDiscardDraft}
            />
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
                {/* <Label label='Reminder' />
                <ReminderDropDown
                    reminder={reminder}
                    setReminder={setReminder}
                    labelTextStyle={styles.labelTextStyle}
                    borderStyle={styles.dropDownBorderStyle}
                    containerStyle={styles.dropDownPickerStyle}
                /> */}
                {/* <SeparatorItem /> */}
                <Label label='Share with' />
                <EmailChipTextInput emails={emails} setEmails={setEmails} />
                <Button
                    label='Upload'
                    buttonContainerStyle={styles.uploadButtonContainerStyle}
                    onButtonPress={onUploadPress}
                />
            </View>
        </>
    );
};

export default CreateGoalScreen;
