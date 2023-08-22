import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import PropTypes from 'prop-types';

import { useStore } from '../../../../zustand/root-reducer';

import AvatarImage from '../../../../components/AvatarImage/AvatarImage';
import PaperPlaneSvg from '../../../../assets/svgs/PaperPlaneSvg';
import CameraSvg from '../../../../assets/svgs/CameraSvg';
import PhotoSvg from '../../../../assets/svgs/PhotoSvg';

import styles from './styles';
import CommenInputHeader from '../CommentInputHeader/CommentInputHeader';

const AddCommentInput = ({ avatarImage, postId, isFromUpdates, refreshScreen, label }) => {
    const myUserData = useStore((state) => state.myUser.data);
    const postComment = useStore((state) => state.postComment);
    const postUpdate = useStore((state) => state.postUpdate);

    const [isSendButtonVisible, setIsSendButtonVisible] = useState(false);
    const [comment, setComment] = useState('');
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');

    const onGalleryPress = async () => {
        const response = await launchImageLibrary({
            maxHeight: 200,
            maxWidth: 200,
        });

        if (response?.assets) {
            setImage(response.assets[0]);
        }
    };

    const onCameraPress = async () => {
        const response = await launchCamera({
            maxHeight: 200,
            maxWidth: 200,
        });
        if (response?.assets) {
            setImage(response.assets[0]);
        }
    };

    const onImageClose = () => {
        setImage(null);
    };

    const onPostCommentPress = () => {
        if (isFromUpdates) {
            postUpdate(comment, postId, myUserData.id, title, image);

            setImage(null);
            setTitle('');
        } else {
            postComment(comment, postId, myUserData.id);
        }

        setComment('');
        refreshScreen();
    };

    useEffect(() => {
        const sendButtonVisibility = isFromUpdates ? title && (comment || image) : comment;
        if (sendButtonVisibility && !isSendButtonVisible) {
            setIsSendButtonVisible(true);
        }

        if (!sendButtonVisibility && isSendButtonVisible) {
            setIsSendButtonVisible(false);
        }
    }, [comment, title, image]);

    return (
        <KeyboardAvoidingView enabled behavior='padding' keyboardVerticalOffset={112}>
            {isFromUpdates ? (
                <CommenInputHeader
                    image={image}
                    onImageClose={onImageClose}
                    title={title}
                    onTitleChange={setTitle}
                />
            ) : null}

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
                    {isFromUpdates && !image ? (
                        <>
                            <TouchableOpacity style={styles.cameraIcon} onPress={onCameraPress}>
                                <CameraSvg />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.fileIcon} onPress={onGalleryPress}>
                                <PhotoSvg />
                            </TouchableOpacity>
                        </>
                    ) : null}
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
