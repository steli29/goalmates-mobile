import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const AvatarImage = ({ imageUrl, size }) => {
    const defaultImageUrl = require('../../assets/avatar-default/avatar-default.jpg');

    return (
        <Image
            source={imageUrl ? { uri: imageUrl } : defaultImageUrl}
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
            }}
        />
    );
};

AvatarImage.propTypes = {
    imageUrl: PropTypes.string,
    size: PropTypes.number,
};

export default AvatarImage;
