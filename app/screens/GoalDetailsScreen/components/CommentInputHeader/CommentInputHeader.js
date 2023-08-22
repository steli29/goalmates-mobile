import React from 'react';
import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CloseSvg from '../../../../assets/svgs/CloseSvg';

const CommenInputHeader = ({ image, onImageClose, title, onTitleChange }) => {
    const CloseButton = () => {
        return (
            <TouchableOpacity onPress={onImageClose} style={styles.closeButtonStyle}>
                <CloseSvg />
            </TouchableOpacity>
        );
    };

    const RenderImageContainer = () => {
        if (!image) return null;
        return (
            <View style={styles.imageContainer}>
                <Image source={{ uri: image.uri }} style={styles.imageStyle} />
                <CloseButton />
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <RenderImageContainer />
            <View style={styles.titleInputContainer}>
                <TextInput
                    value={title}
                    onChangeText={onTitleChange}
                    autoCapitalize='none'
                    autoCorrect={false}
                    textAlignVertical='center'
                    placeholder='Set Title'
                    style={styles.titleInputStyle}
                />
            </View>
        </View>
    );
};

CommenInputHeader.propTypes = {
    image: PropTypes.object,
    onImageClose: PropTypes.func,
    title: PropTypes.string,
    onTitleChange: PropTypes.func,
};

export default CommenInputHeader;
