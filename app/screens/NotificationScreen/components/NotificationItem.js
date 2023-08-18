import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import AvatarImage from '../../../components/AvatarImage/AvatarImage';
import styles from '../styles';
import TrashbinSvg from '../../../assets/svgs/TrashbinSvg';

const NotificationItem = ({ userName, notificationText, avatarImage, date }) => {
    return (
        <View style={styles.row}>
            <AvatarImage size={46} imageUrl={avatarImage} />
            <View style={styles.notificationRowContainer}>
                <Text style={styles.userNameTextStyle}>
                    {userName} <Text style={styles.notificationTextStyle}>{notificationText}</Text>
                </Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>
            <TouchableOpacity>
                <TrashbinSvg size={18}/>
            </TouchableOpacity>
        </View>
    );
};

NotificationItem.propTypes = {
    userName: PropTypes.string,
    notificationText: PropTypes.string,
    avatarImage: PropTypes.string,
    date: PropTypes.string,
};

export default NotificationItem;
