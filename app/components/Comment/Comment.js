import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { commentSection } from '../../project/constants';
import { convertBase64ToImage } from '../../project/helpers/helper-functions';
import { useStore } from '../../zustand/root-reducer';

import AvatarImage from '../AvatarImage/AvatarImage';
import LikeButton from '../LikeButton/LikeButton';
import SliderWidget from '../SliderWidget/SliderWidget';
import TrashbinSvg from '../../assets/svgs/TrashbinSvg';

import styles from './styles';

const Comment = ({
    user,
    likes,
    title,
    commentId,
    comment,
    refreshScreen,
    imageSource,
    selected,
    isPostCreatedByCurrentUser,
}) => {
    const deleteComment = useStore((state) => state.deleteComment);
    const myUserData = useStore((state) => state.myUser.data);

    const isCommentSection = selected === commentSection.COMMENTS;
    const isCommentCreatedByCurrentUser = user?.id === myUserData?.id;

    const name = isCommentSection ? `${user?.firstName} ${user?.lastName}` : title;
    const userAvatar = convertBase64ToImage(user?.image);

    const onDeleteCommentPress = () => {
        deleteComment(commentId);
        refreshScreen();
    };

    const RenderCommentFooter = () => {
        if (isCommentSection) {
            return (
                <View style={styles.likeContainer}>
                    <LikeButton likes={likes} commentId={commentId} refreshScreen={refreshScreen} />
                    <Text style={styles.likeCountText}>{likes?.length} Likes</Text>
                </View>
            );
        }

        return (
            <View>
                <SliderWidget
                    disabled={isPostCreatedByCurrentUser}
                    updateId={commentId}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <AvatarImage imageUrl={userAvatar} size={40} />
            <View style={styles.commentContainer}>
                {isCommentSection &&
                (isPostCreatedByCurrentUser || isCommentCreatedByCurrentUser) ? (
                    <TouchableOpacity style={styles.deleteContainer} onPress={onDeleteCommentPress}>
                        <TrashbinSvg size={13} />
                    </TouchableOpacity>
                ) : null}
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>{name}</Text>
                </View>
                <View style={styles.commentContent}>
                    {comment && <Text style={styles.commentText}>{comment}</Text>}
                    {imageSource && (
                        <Image
                            source={{ uri: convertBase64ToImage(imageSource).uri }}
                            style={styles.commentImage}
                        />
                    )}
                </View>
                <RenderCommentFooter />
            </View>
        </View>
    );
};

Comment.propTypes = {
    user: PropTypes.object,
    likes: PropTypes.array,
    commentId: PropTypes.number,
    comment: PropTypes.string,
    refreshScreen: PropTypes.func,
    imageSource: PropTypes.string,
    selected: PropTypes.string,
    title: PropTypes.string,
    isPostCreatedByCurrentUser: PropTypes.bool,
};

export default Comment;
