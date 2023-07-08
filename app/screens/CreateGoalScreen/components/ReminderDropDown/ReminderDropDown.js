import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';

import { ReminderData } from '../../../../project/constants';

const ReminderDropDown = ({
    reminder,
    setReminder,
    labelTextStyle,
    borderStyle,
    containerStyle,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const reminderData = [
        { label: ReminderData.EVERY_DAY, value: ReminderData.EVERY_DAY },
        { label: ReminderData.EVERY_WEEK, value: ReminderData.EVERY_WEEK },
        { label: ReminderData.EVERY_MONTH, value: ReminderData.EVERY_MONTH },
    ];

    return (
        <DropDownPicker
            items={reminderData}
            value={reminder}
            setValue={setReminder}
            open={isOpen}
            setOpen={setIsOpen}
            textStyle={labelTextStyle}
            zIndex={3000}
            zIndexInverse={1000}
            listMode='FLATLIST'
            dropDownDirection='BOTTOM'
            style={[containerStyle, borderStyle]}
            dropDownContainerStyle={borderStyle}
            listItemContainerStyle={containerStyle}
        />
    );
};

ReminderDropDown.propTypes = {
    reminder: PropTypes.string,
    setReminder: PropTypes.func,
    labelTextStyle: PropTypes.object,
    borderStyle: PropTypes.object,
    containerStyle: PropTypes.object,
};

export default ReminderDropDown;
