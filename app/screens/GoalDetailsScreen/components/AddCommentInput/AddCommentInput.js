import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import AvatarImage from '../../../../components/AvatarImage/AvatarImage';

import styles from './styles';
import PaperPlaneSvg from '../../../../assets/svgs/PaperPlaneSvg';
import AttachSvg from '../../../../assets/svgs/AttachSvg';
import CameraSvg from '../../../../assets/svgs/CameraSvg';

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
            <View style={styles.commentInputContainer}>
                <TextInput
                    value={comment}
                    onChangeText={setComment}
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline
                    textAlignVertical='center'
                    placeholder='Add a comment'
                    style={styles.commentInput}
                />
                <TouchableOpacity style={styles.cameraIcon}>
                    <CameraSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fileIcon}>
                    <AttachSvg />
                </TouchableOpacity>
            </View>
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
