import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import AvatarImage from '../../../../components/AvatarImage/AvatarImage';

import styles from '../../styles';

const SearchItem = ({ onUserPress, firstName, lastName, image }) => {

    return (
        <TouchableOpacity style={styles.profileContainer} onPress={onUserPress}>
            <AvatarImage size={50} imageUrl={image}/>
            <Text style={styles.nameLabel}>
                {firstName} {lastName}
            </Text>
        </TouchableOpacity>
    );
};

SearchItem.propTypes = {
    onUserPress: PropTypes.func,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.object,
}

export default SearchItem;
