import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import AvatarImage from '../AvatarImage/AvatarImage';

import styles from './styles';

const Comment = ({ userImage, userName, comment, imageSource }) => {
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
            </View>
        </View>
    );
};

Comment.propTypes = {
    userImage: PropTypes.object,
    userName: PropTypes.string,
    comment: PropTypes.string,
    imageSource: PropTypes.string,
};

export default Comment;
