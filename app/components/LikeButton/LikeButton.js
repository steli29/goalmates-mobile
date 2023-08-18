import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { useButtonDebounce } from '../../project/hooks/useButtonDebounce';
import { useStore } from '../../zustand/root-reducer';

import HeartActiveSvg from '../../assets/svgs/HeartActiveSvg';
import HeartSvg from '../../assets/svgs/HeartSvg';

const LikeButton = ({likes, commentId, refreshScreen }) => {
    const dislikePost = useStore((state) => state.dislikePost);
    const likePost = useStore((state) => state.likePost);
    const myUserData = useStore((state) => state.myUser.data);

    const { debounce } = useButtonDebounce();

    const isLikePresent = likes.some((like) => like.userId === myUserData?.id);

    const toggleLike = () => {
        if (isLikePresent) {
            dislikePost(commentId, myUserData?.id);
        } else {
            likePost(commentId, myUserData?.id);
        }
        refreshScreen();
    };
    return (
        <TouchableOpacity onPress={debounce(toggleLike)}>
            {isLikePresent ? <HeartActiveSvg /> : <HeartSvg />}
        </TouchableOpacity>
    );
};

LikeButton.propTypes = {
    likes: PropTypes.array,
    commentId: PropTypes.number,
    refreshScreen: PropTypes.func,
};

export default LikeButton;
