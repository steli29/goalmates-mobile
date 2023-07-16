import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Label from '../../components/Label/Label';
import ReminderDropDown from './components/ReminderDropDown/ReminderDropDown';
import EmailChipTextInput from './components/EmailChipTextInput/EmailChipTextInput';
import Button from '../../components/Button/Button';

import styles from './styles';
import SaveDraftModal from '../../components/SaveDraftModal/SaveDraftModal';
import AppContext from '../../contexts/AppContext';
import { getDraft, saveDraft } from '../../project/api/helpers';
import { isEmptyObj } from '../../project/helpers/helper-functions';

const CreateGoalScreen = ({ navigation }) => {
    const [goalTitle, setGoalTitle] = useState('');
    const [goalDescription, setGoalDescription] = useState('');
    const [reminder, setReminder] = useState(null);
    const [emails, setEmails] = useState([]);

    const { isSaveDraftModalOpen, onSaveDraftModalClose } = useContext(AppContext);

    const SeparatorItem = () => {
        return (
            <View
                style={{
                    height: 16,
                }}
            />
        );
    };

    const onFocus = async () => {
        const result = await getDraft();

        if (!isEmptyObj(result)) {
            setGoalTitle(result.goalTitle);
            setGoalDescription(result.goalDescription);
            setReminder(result.reminder);
            setEmails(result.emails);

            saveDraft({});
        }
    };

    const onSaveDraft = () => {
        saveDraft({
            goalTitle,
            goalDescription,
            reminder,
            emails,
        });
    };

    const onDiscardDraft = () => {
        setGoalTitle('');
        setGoalDescription('');
        setReminder(null);
        setEmails([]);
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            onFocus();
        });

        return () => {
            unsubscribe();
        };
    }, [navigation]);

    return (
        <>
            <SaveDraftModal
                isVisible={isSaveDraftModalOpen}
                onClose={onSaveDraftModalClose}
                onSaveDraft={onSaveDraft}
                onDiscardDraft={onDiscardDraft}
            />
            <SafeAreaView style={styles.mainContainer}>
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
                <Label label='Reminder' />
                <ReminderDropDown
                    reminder={reminder}
                    setReminder={setReminder}
                    labelTextStyle={styles.labelTextStyle}
                    borderStyle={styles.dropDownBorderStyle}
                    containerStyle={styles.dropDownPickerStyle}
                />
                <SeparatorItem />
                <Label label='Share with' />
                <EmailChipTextInput emails={emails} setEmails={setEmails} />
                <Button label='Upload' buttonContainerStyle={styles.uploadButtonContainerStyle} />
            </SafeAreaView>
        </>
    );
};

export default CreateGoalScreen;
