import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { ReminderData } from '../../project/constants';
import { formatDate, getDateAfterMonths } from '../../project/helpers/helper-functions';

import GoalTextField from './components/GoalTextField/GoalTextField';
import AuthHeadLine from '../../components/AuthHeadLine/AuthHeadLine';
import GoalPreview from '../../components/GoalPreview/GoalPreview';

import styles from './styles';

const CreateGoalScreen = () => {
    const [goalTitle, setGoalTitle] = useState('');
    const [goalDescription, setGoalDescription] = useState('');
    const [reminder, setReminder] = useState(null);
    const [dueDate, setDueDate] = useState(null);

    const reminderData = [
        { label: ReminderData.EVERY_DAY, value: ReminderData.EVERY_DAY },
        { label: ReminderData.EVERY_WEEK, value: ReminderData.EVERY_WEEK },
        { label: ReminderData.EVERY_MONTH, value: ReminderData.EVERY_MONTH },
    ];

    const dueDateData = new Array(12).fill(1).map((_, index) => {
        const number = index + 1;
        return {
            label: `${number} Months`,
            value: `${number}`,
        };
    });

    const dueDateAsDate = getDateAfterMonths(Number(dueDate));
    const dueDateAsString = formatDate(dueDateAsDate);
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
        setDueDate(null);
    }, [])

    return (
        <View style={styles.mainContainer}>
            <GoalTextField label='Goal Title' value={goalTitle} onChangeValue={setGoalTitle} />
            <SeparatorItem />
            <GoalTextField
                label='Goal Description'
                value={goalDescription}
                onChangeValue={setGoalDescription}
            />
            <SeparatorItem />
            <GoalTextField
                label='Reminder'
                value={reminder}
                onChangeValue={setReminder}
                dropdownData={reminderData}
                zIndex={3000}
                zIndexInverse={1000}
                isDropDown
            />
            <SeparatorItem />
            <GoalTextField
                label='Due Date'
                value={dueDate}
                onChangeValue={setDueDate}
                dropdownData={dueDateData}
                zIndex={1000}
                zIndexInverse={3000}
                isDropDown
            />
            <SeparatorItem />
            <AuthHeadLine headline='Goal Preview' />
            <SeparatorItem />
            <GoalPreview
                title={goalTitle}
                description={goalDescription}
                deadline={dueDateAsString}
            />
        </View>
    );
};

export default CreateGoalScreen;
