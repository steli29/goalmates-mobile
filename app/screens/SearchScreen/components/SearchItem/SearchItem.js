import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import AvatarImage from '../../../../components/AvatarImage/AvatarImage';

import styles from '../../styles';

const SearchItem = ({ onUserPress, firstName, lastName }) => {
    return (
        <TouchableOpacity style={styles.profileContainer} onPress={onUserPress}>
            <AvatarImage size={50} />
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
}

export default SearchItem;
