import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import HeartActiveSvg from '../../assets/svgs/HeartActiveSvg';
import HeartSvg from '../../assets/svgs/HeartSvg';

const LikeButton = () => {
    const [isLikeActive, setIsLikeActive] = useState(false);

    const toggleLike = () => {
        setIsLikeActive(!isLikeActive);
    };
    return (
        <TouchableOpacity onPress={toggleLike}>
            {isLikeActive ? <HeartActiveSvg /> : <HeartSvg />}
        </TouchableOpacity>
    );
};

export default LikeButton;
