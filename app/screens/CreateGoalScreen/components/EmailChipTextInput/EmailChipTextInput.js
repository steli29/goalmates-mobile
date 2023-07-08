import React, { useState } from 'react';
import { View } from 'react-native';
import TagInput from 'react-native-tag-input';
import PropTypes from 'prop-types';

import styles from './styles';

const EmailChipTextInput = ({ emails, setEmails }) => {
    const [emailsText, setEmailsText] = useState('');

    const inputProps = {
        keyboardType: 'default',
        autoFocus: true,
        style: [
            styles.textInputContainer,
            styles.textInputStyle
        ],
    };

    const onChangeText = (text) => {
        setEmailsText(text);

        const lastTyped = text.charAt(text.length - 1);
        const parseWhen = [',', ' ', ';', '\n'];

        if (parseWhen.indexOf(lastTyped) > -1) {
            setEmails([...emails, text]);
            setEmailsText('');
        }
    };

    return (
        <View style={styles.mainContainer}>
            <TagInput
                value={emails}
                onChange={setEmails}
                labelExtractor={(email) => email}
                text={emailsText}
                onChangeText={onChangeText}
                inputProps={inputProps}
                tagContainerStyle={styles.tagContainerStyle}
                tagTextStyle={styles.textInputStyle}
            />
        </View>
    );
};

EmailChipTextInput.propTypes = {
    emails: PropTypes.array,
    setEmails: PropTypes.func,
};

export default EmailChipTextInput;
