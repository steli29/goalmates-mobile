import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { useStore } from '../../../../zustand/root-reducer';

import AvatarImage from '../../../../components/AvatarImage/AvatarImage';
import PaperPlaneSvg from '../../../../assets/svgs/PaperPlaneSvg';
import AttachSvg from '../../../../assets/svgs/AttachSvg';
import CameraSvg from '../../../../assets/svgs/CameraSvg';

import styles from './styles';

const AddCommentInput = ({ avatarImage, postId, isFromUpdates, refreshScreen, label }) => {
    const myUserData = useStore((state) => state.myUser.data);
    const postComment = useStore((state) => state.postComment);

    const [isSendButtonVisible, setIsSendButtonVisible] = useState(false);
    const [comment, setComment] = useState('');

    const onPostCommentPress = () => {
        if(isFromUpdates){
            console.log('+++postId');
        } else {
            postComment(comment, postId, myUserData.id);
        }
        setComment('');
        refreshScreen();
    };

    useEffect(() => {
        if (comment.length > 0 && !isSendButtonVisible) {
            setIsSendButtonVisible(true);
        }

        if (!comment.length && isSendButtonVisible) {
            setIsSendButtonVisible(false);
        }
    }, [comment]);

    return (
        <KeyboardAvoidingView enabled behavior='padding' keyboardVerticalOffset={112}>
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
                        placeholder={label}
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
                    <TouchableOpacity
                        style={styles.sendCommentContainer}
                        onPress={onPostCommentPress}
                    >
                        <PaperPlaneSvg />
                    </TouchableOpacity>
                )}
            </View>
        </KeyboardAvoidingView>
    );
};

AddCommentInput.propTypes = {
    avatarImage: PropTypes.object,
    postId: PropTypes.number,
    isFromUpdates: PropTypes.bool,
    refreshScreen: PropTypes.func,
    label: PropTypes.string,
};

export default AddCommentInput;
