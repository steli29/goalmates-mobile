import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { bp } from '../../project/utils/relativeUnitUtils';

const AvatarImage = ({ imageUrl, size }) => {
    const defaultImageUrl = require('../../assets/avatar-default/avatar-default.jpg');

    return (
        <Image
            source={imageUrl ? { uri: imageUrl.uri } : defaultImageUrl}
            style={{
                width: bp(size),
                height: bp(size),
                borderRadius: bp(size / 2),
            }}
        />
    );
};

AvatarImage.propTypes = {
    imageUrl: PropTypes.string,
    size: PropTypes.number,
};

export default AvatarImage;
