import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import AvatarImage from '../../../../components/AvatarImage/AvatarImage';

import styles from './styles';
import PaperPlaneSvg from '../../../../assets/svgs/PaperPlaneSvg';

const AddCommentInput = ({ avatarImage }) => {
    const [isSendButtonVisible, setIsSendButtonVisible] = useState(false);
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (comment.length > 0 && !isSendButtonVisible) {
            setIsSendButtonVisible(true);
        }

        if (!comment.length && isSendButtonVisible) {
            setIsSendButtonVisible(false);
        }
    }, [comment]);

    return (
        <View style={styles.mainContainer}>
            <AvatarImage size={44} imageUrl={avatarImage} />
            <TextInput
                value={comment}
                onChangeText={setComment}
                autoCapitalize='none'
                autoCorrect={false}
                multiline
                textAlignVertical='center'
                placeholder='Add a comment'
                style={styles.commentInputContainer}
            />
            {isSendButtonVisible && (
                <TouchableOpacity style={styles.sendCommentContainer}>
                    <PaperPlaneSvg />
                </TouchableOpacity>
            )}
        </View>
    );
};

AddCommentInput.propTypes = {
    avatarImage: PropTypes.string,
};

export default AddCommentInput;
