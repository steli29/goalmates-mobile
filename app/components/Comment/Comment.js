import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { commentSection } from '../../project/constants';
import { convertBase64ToImage } from '../../project/helpers/helper-functions';

import AvatarImage from '../AvatarImage/AvatarImage';
import LikeButton from '../LikeButton/LikeButton';
import SliderWidget from '../SliderWidget/SliderWidget';
import TrashbinSvg from '../../assets/svgs/TrashbinSvg';

import styles from './styles';
import { useStore } from '../../zustand/root-reducer';

const Comment = ({
    user,
    likes,
    commentId,
    comment,
    refreshScreen,
    imageSource,
    selected,
    isPostCreatedByCurrentUser,
}) => {
    const deleteComment = useStore((state) => state.deleteComment);
    const myUserData = useStore((state) => state.myUser.data);

    const name = `${user?.firstName} ${user?.lastName}`;
    const userImage = user ? convertBase64ToImage(user?.image) : null;

    const isCommentSection = selected === commentSection.COMMENTS;
    const isCommentCreatedByCurrentUser = user?.id === myUserData?.id;
    const onDeleteCommentPress = () => {
        deleteComment(commentId);
        refreshScreen()
    }

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
                <SliderWidget disabled={isPostCreatedByCurrentUser} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <AvatarImage imageUrl={userImage} size={40} />
            <View style={styles.commentContainer}>
                {isCommentSection && (isPostCreatedByCurrentUser || isCommentCreatedByCurrentUser) ? (
                    <TouchableOpacity 
                        style={styles.deleteContainer}
                        onPress={onDeleteCommentPress}
                    >
                        <TrashbinSvg size={13} />
                    </TouchableOpacity>
                ) : null}
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>{name}</Text>
                </View>
                <View style={styles.commentContent}>
                    {comment && <Text style={styles.commentText}>{comment}</Text>}
                    {imageSource && (
                        <Image source={{ uri: imageSource }} style={styles.commentImage} />
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
    isPostCreatedByCurrentUser: PropTypes.bool,
};

export default Comment;
