import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { commentSection } from '../../project/constants';

import AvatarImage from '../AvatarImage/AvatarImage';
import LikeButton from '../LikeButton/LikeButton';
import SliderWidget from '../SliderWidget/SliderWidget';

import styles from './styles';

const Comment = ({
    userImage,
    userName,
    comment,
    imageSource,
    selected,
    isCreatedByCurrentUser,
}) => {
    const RenderCommentFooter = () => {
        if (selected === commentSection.COMMENTS) {
            return (
                <View style={styles.likeContainer}>
                    <LikeButton />
                    <Text style={styles.likeCountText}>1 Likes</Text>
                </View>
            );
        }
        return (
            <View>
                <SliderWidget disabled={isCreatedByCurrentUser} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <AvatarImage imageUrl={userImage} size={40} />
            <View style={styles.commentContainer}>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>{userName}</Text>
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
    userImage: PropTypes.object,
    userName: PropTypes.string,
    comment: PropTypes.string,
    imageSource: PropTypes.string,
    selected: PropTypes.string,
    isCreatedByCurrentUser: PropTypes.bool,
};

export default Comment;
