import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Label from '../../components/Label/Label';
import ReminderDropDown from './components/ReminderDropDown/ReminderDropDown';
import EmailChipTextInput from './components/EmailChipTextInput/EmailChipTextInput';
import Button from '../../components/Button/Button';

import styles from './styles';

const CreateGoalScreen = ({ navigation }) => {
    const [goalTitle, setGoalTitle] = useState('');
    const [goalDescription, setGoalDescription] = useState('');
    const [reminder, setReminder] = useState(null);
    const [emails, setEmails] = useState([]);

    const onClosePress = () => {
        navigation.goBack();
    };

    const SeparatorItem = () => {
        return (
            <View
                style={{
                    height: 16,
                }}
            />
        );
    };

    useEffect(() => {
        setGoalTitle('');
        setGoalDescription('');
        setReminder(null);
        setEmails([]);
    }, []);

    return (
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
            <Button 
                label="Upload"
                buttonContainerStyle={styles.uploadButtonContainerStyle}
            />
        </SafeAreaView>
    );
};

export default CreateGoalScreen;
